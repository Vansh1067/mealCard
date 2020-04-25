import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { MEALS } from '../data/12.1 dummy-data.js';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton'

import MealList from '../components/MealList';

const FavScreen = props =>{
    
    
    const displayMeal=MEALS.filter(meal=>meal.id==='m1'|| meal.id==='m2');
    return <MealList listData={displayMeal} navigation={props.navigation}></MealList>
}
FavScreen.navigationOptions=navdata=>{
    return {
        headerTitle:"Favourite Meals",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
     onPress={()=>{navdata.navigation.toggleDrawer()}}></Item></HeaderButtons>
    }
    }

  



export default FavScreen;