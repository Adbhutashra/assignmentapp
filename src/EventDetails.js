import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { Card, Title, Paragraph, Button, Badge, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventDetailsScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Image source={require('../assets/event.png')} style={{ height: 200, width: '100%' }} />

                <Card.Content>
                    <Title style={styles.eventTitle}>The complete AR Rahman Show</Title>

                    <View style={styles.eventInfo}>
                        <Badge style={styles.badge}>157 interested</Badge>
                        <View style={styles.tagContainer}>
                            <Badge style={styles.tag}>Teaser</Badge>
                            <Badge style={styles.tag}>Fast filling</Badge>
                        </View>
                    </View>

                    <Paragraph style={styles.eventDescription}>
                        2h 30m | 5 years+ | Bollywood, Retro | Hindi, Tamil
                    </Paragraph>
                    <Paragraph style={styles.eventDate}>Sat 26.Oct.2024</Paragraph>
                    <Paragraph style={styles.eventPrice}>Price: ₹480 - ₹1580</Paragraph>

                    <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={18} color="#7f7f7f" />
                        <Paragraph style={styles.location}>North Avenue Grounds, Bangalore</Paragraph>
                    </View>

                    <View style={styles.timeContainer}>
                        <Badge style={styles.tag}>7:00 pm</Badge>
                        <Text style={styles.seatsBadge}>16 seats left</Text>
                    </View>

                    <Divider />

                    <Title style={styles.subHeading}>Policies & Rules</Title>
                    <Paragraph style={styles.policyText}>Follow organiser guidelines</Paragraph>
                    <Paragraph style={styles.policyText}>Drugs, smoke, and alcohol consumption prohibited</Paragraph>
                    <Paragraph style={styles.policyText}>Kids below 5 years not recommended</Paragraph>

                    <Title style={styles.subHeading}>Offers for you</Title>
                    <Paragraph style={styles.offerText}>Paytm 5% off for min value of ₹1500</Paragraph>
                    <Paragraph style={styles.offerText}>Use HSBC CC for 10% discount on any booking</Paragraph>
                </Card.Content>

                <Card.Actions style={styles.cardActions}>
                    <Pressable onPress={() => navigation.navigate('SelectSeats')}>
                        <Paragraph style={styles.offerText}>Select time slots to proceed</Paragraph>
                    </Pressable>
                    <Button mode="contained" style={styles.proceedButton}>
                        Proceed
                    </Button>
                </Card.Actions>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    eventInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    badge: {
        marginRight: 10,
    },
    tagContainer: {
        flexDirection: 'row',
    },
    tag: {
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        color: '#000',
    },
    eventDescription: {
        fontSize: 14,
        color: '#7f7f7f',
    },
    eventDate: {
        fontSize: 14,
        marginTop: 5,
        color: '#7f7f7f',
    },
    eventPrice: {
        fontSize: 14,
        marginTop: 5,
        color: '#000',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    location: {
        fontSize: 14,
        marginLeft: 5,
        color: '#7f7f7f',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    timeInput: {
        flex: 1,
    },
    seatsBadge: {
        marginLeft: 10,
        color: '#ff5722',
    },
    subHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    },
    policyText: {
        fontSize: 14,
        color: '#7f7f7f',
    },
    offerText: {
        fontSize: 14,
        color: '#7f7f7f',
    },
    cardActions: {
        justifyContent: 'flex-end',
        padding: 10,
    },
    proceedButton: {
        backgroundColor: '#6200ee',
    },
});

export default EventDetailsScreen;