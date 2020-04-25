import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as font from 'expo-font';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
//import {useScreens} from 'react-native-screens';

import MealReducer from './store/mealReducer'
import Navigation from './navigation/navigation'



const rootReducer=combineReducers({
  meals:MealReducer
})

const store=createStore(rootReducer)

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
 
  return <Provider store={store}><Navigation></Navigation></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
