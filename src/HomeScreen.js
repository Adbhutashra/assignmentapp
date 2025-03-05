import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Pressable, Dimensions, ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph, Portal, Modal, Provider, Switch, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const unreadNotifications = 4;

    const openBottomSheet = () => setVisible(true);
    const closeBottomSheet = () => setVisible(false);

    const categories = [
        {
            title: 'Plays',
            image: require('../assets/plays.png')
        },
        {
            title: 'Pets Show',
            image: require('../assets/pets-show.png')
        }, {
            title: 'Concert',
            image: require('../assets/concert.png')
        }, {
            title: 'Magician',
            image: require('../assets/magician.png')
        }, {
            title: 'Food Fest',
            image: require('../assets/food-fest.png')
        },
        {
            title: 'Dance',
            image: require('../assets/dance.png')
        }, {
            title: 'Premiere',
            image: require('../assets/premiere.png')
        }, {
            title: 'Sports',
            image: require('../assets/sports.png')
        },
    ];

    const events = [
        {
            id: '1',
            image: require('../assets/popular1.png'),
        },
        {
            id: '2',
            image: require('../assets/popular2.png'),
        },
    ];

    const bookings = [
        {
            id: '1',
            image: require('../assets/booking1.png'),
        },
        {
            id: '2',
            image: require('../assets/booking2.png'),
        },
    ];

    const renderCategory = ({ item, index }) => (
        <Card key={index} style={styles.categoryCard}>
            <View>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{item.title}</Text>
            </View>
        </Card>
    );

    const renderEvent = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('EventDetails')} >
            <Card style={styles.popularCard}>
                <Card.Cover source={item.image} />
            </Card>
        </Pressable>
    );

    const renderBooking = ({ item }) => (
        <Card style={styles.bookingCard}>
            <Card.Cover source={item.image} />
        </Card>
    );


    return (
        <Provider>
            <ScrollView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={{ height: 40, width: 120 }} />

                    <View style={styles.iconContainer}>
                        <Icon name="bell-outline" size={26} />
                        {unreadNotifications > 0 && (
                            <Badge style={styles.badge}>{unreadNotifications}</Badge>
                        )}
                    </View>
                </View>
                <View style={styles.header} onTouchEnd={openBottomSheet}>
                    <Icon name="map-marker" size={24} />
                    <View>
                        <Text style={styles.locationText}>Bangalore</Text>
                        <Text style={styles.locationSubtitle}>#2 KR Layout, Indiranagar</Text>
                    </View>

                </View>
                <Portal>
                    <Modal visible={visible} onDismiss={closeBottomSheet} contentContainerStyle={styles.bottomSheetContainer}>
                        <View>
                            <Text style={styles.sectionTitle}>Select your location</Text>

                            <View style={styles.locationPermission}>
                                <Text>Phone location permission</Text>
                                <Switch value={true} onValueChange={() => { }} />
                            </View>

                            <Text style={styles.currentLocationTitle}>Current Location</Text>
                            <View style={styles.locationRow}>
                                <Icon name="map-marker" size={24} color="#7C4DFF" />
                                <Text style={styles.locationText}>Bangalore, #2 KR Layout, 4th phase, Indiranagar</Text>
                            </View>

                            <Text style={styles.recentLocationTitle}>Recent Locations</Text>
                            <View style={styles.locationRow}>
                                <Icon name="map-marker" size={24} color="#7C4DFF" />
                                <Text style={styles.locationText}>Sheikh Sarai, #14 JL Road, Delhi</Text>
                            </View>
                            <View style={styles.locationRow}>
                                <Icon name="map-marker" size={24} color="#7C4DFF" />
                                <Text style={styles.locationText}>Saket, 2nd main, Saket main road</Text>
                            </View>

                            <Button mode="contained" style={styles.confirmButton}>Confirm</Button>
                        </View>

                    </Modal>
                </Portal>

                <View style={styles.tabs}>
                    <Button mode="text" labelStyle={styles.tabText}>Entertainment</Button>
                    <Button mode="text" labelStyle={styles.tabText}>Academic</Button>
                    <Button mode="text" labelStyle={styles.tabText}>Volunteering</Button>
                </View>

                <Text style={styles.sectionTitle}>Pick your category</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    numColumns={4}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderCategory}
                    style={styles.categoryContainer}
                />

                <Text style={styles.sectionTitle}>Most Popular</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={events}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEvent}
                    style={styles.popularEventsContainer}
                />
                <Text style={styles.sectionTitle}>Resume your booking</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={bookings}
                    keyExtractor={(item) => item.id}
                    renderItem={renderBooking}
                    style={styles.resumeBookingContainer}
                />
            </ScrollView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        position: 'relative',
        left: Dimensions.get('window').width * 0.22
    },
    badge: {
        position: 'absolute',
        bottom: -4,
        right: -4,
        backgroundColor: '#7C4DFF',
        color: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f9f5fd',
        paddingVertical: 10,
        borderRadius: 10
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7C4DFF',
        marginLeft: 10,
    },
    locationSubtitle: {
        fontSize: 14,
        color: '#757575',
        marginLeft: 10,
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 0.5
    },
    tabText: {
        color: 'black',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryContainer: {
        marginBottom: 20
    },
    categoryCard: {
        width: 80,
        height: 110,
        margin: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContent: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    categoryText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
    },
    categoryImage: {
        width: 85,
        height: 80,
    },
    locationPermission: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    currentLocationTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    recentLocationTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    confirmButton: {
        marginTop: 20,
    },
    popularEventsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 30
    },
    popularCard: {
        width: 250,
        height: 120,
        marginRight: 10,
    },
    resumeBookingContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    bookingCard: {
        width: 140,
        height: 80,
        marginRight: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
    },
    bottomSheetContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        marginTop: Dimensions.get('window').height * 0.4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomSheetContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default HomeScreen;