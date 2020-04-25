import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as font from 'expo-font';
import {AppLoading} from 'expo';


import Navigation from './navigation/navigation'


const fetchFont =()=>{
 return  font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Regular.ttf')
  });
}


export default function App() {
  const [isLoaded ,setIsLoaded]=useState(false);
 
  if(!isLoaded){
    return <AppLoading startAsync={fetchFont} onFinish={()=>{setIsLoaded(true)}}></AppLoading>;
  }
 
  return <Navigation></Navigation>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
