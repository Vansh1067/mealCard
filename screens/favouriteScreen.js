import React from 'react';

import { useSelector } from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton'

import MealList from '../components/MealList';

const FavScreen = props =>{
    
    const availableMeals=useSelector(state=>state.meals.favMeals);

    return <MealList listData={availableMeals} navigation={props.navigation}></MealList>
}
FavScreen.navigationOptions=navdata=>{
    return {
        headerTitle:"Favourite Meals",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
     onPress={()=>{navdata.navigation.toggleDrawer()}}></Item></HeaderButtons>
    }
    }

  



export default FavScreen;