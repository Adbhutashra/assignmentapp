import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Or another icon library
import HomeScreen from './HomeScreen';

const BookmarkScreen = () => <View style={styles.screen}><Text>Bookmarks</Text></View>;
const SearchScreen = () => <View style={styles.screen}><Text>Search</Text></View>;
const FavoriteScreen = () => <View style={styles.screen}><Text>Favorites</Text></View>;
const ProfileScreen = () => <View style={styles.screen}><Text>Profile</Text></View>;

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    height: 60,
                },
                tabBarActiveTintColor: '#7C4DFF',
                tabBarInactiveTintColor: '#B0B0B0',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={BookmarkScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="bookmark" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="magnify" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="heart" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="account" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default BottomTabs;
