/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
 
  StatusBar,
  
} from 'react-native';
import HomeScreen from './src/screens/Home/Index';
import Post from './src/components/post/index';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index';



const App = () => {

  const post1 = feed[0];
  

  return (
<>
    <StatusBar barStyle='dark-content' backgroundColor="transparent"/>
    <SafeAreaView>
     <DestinationSearchScreen/>
     
      
     
    </SafeAreaView>

    </>
  );
};



export default App;
