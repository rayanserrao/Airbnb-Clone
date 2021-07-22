import React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Index';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const ExploreNavigator = () =>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Homescreen' component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name = 'Search Results' component ={SearchResultsScreen} />


        </Stack.Navigator>


           
    )};

export default ExploreNavigator