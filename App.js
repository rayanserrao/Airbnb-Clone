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



const App = () => {
  

  return (
<>
    <StatusBar barStyle='dark-content' backgroundColor="transparent"/>
    <SafeAreaView>
     <Post/>
      
     
    </SafeAreaView>

    </>
  );
};



export default App;
