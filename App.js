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
import feed from './assets/data/feed'



const App = () => {

  const post1 = feed[0];
  

  return (
<>
    <StatusBar barStyle='dark-content' backgroundColor="transparent"/>
    <SafeAreaView>
     <Post post = {post1}/>
     
      
     
    </SafeAreaView>

    </>
  );
};



export default App;
