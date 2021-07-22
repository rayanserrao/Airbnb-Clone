/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import Router from './src/navigation/Router';

import {
  SafeAreaView,
 
  StatusBar,
  
} from 'react-native';
import HomeScreen from './src/screens/Home/Index';
import Post from './src/components/post/index';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index';
import GuestScreen from './src/screens/Guests/index';



const App = () => {

  const post1 = feed[0];
  

  return (
<>
    <StatusBar barStyle='dark-content' backgroundColor="transparent"/>
    <Router/>

    </>
  );
};



export default App;
