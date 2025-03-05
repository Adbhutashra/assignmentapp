import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from './src/LoginScreen';
import EventDetailsScreen from './src/EventDetails';
import BottomTabs from './src/BottomsTabs';
import SelectSeatsScreen from './src/SelectSeats';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                 <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                />
                <Stack.Screen
                    name="EventDetails"
                    component={EventDetailsScreen}
                /> 
                <Stack.Screen
                    name="SelectSeats"
                    component={SelectSeatsScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
