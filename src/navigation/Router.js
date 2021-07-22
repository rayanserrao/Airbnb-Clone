import React from 'react';

import {Text, View, StyleSheet, } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/Index';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';


const Stack = createStackNavigator();

const Router = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabNavigator}  options={{headerShown:false}}/>
                
                <Stack.Screen name ="Destination Search" component={DestinationSearchScreen} />
                <Stack.Screen name = "Guest" component={GuestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;