import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';

const Top = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () =>{
    return (
        <Top.Navigator 
        tabBarOptions={{
            activeTintColor:'red',
            inactiveTintColor:'grey',
            indicatorStyle:{
                backgroundColor:'black'
            }
        }}>
            <Top.Screen name = 'results' component ={SearchResultsScreen} />
            <Top.Screen name = 'map' component ={SearchResultsScreen} />
        </Top.Navigator>

    )
}

export default SearchResultsTabNavigator;