
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import  categoriesMealScreen from '../screens/categoriesMeal';
import  categoriesMealDetailScreen from '../screens/categoriesMealDetailScreen';
import  mealDetailScreen from '../screens/mealDetailScreen';
import FavouriteScreen from '../screens/favouriteScreen';
import FilterScreen from '../screens/filterScreen'
import { Ionicons } from '@expo/vector-icons';

const defaultNavigationOpt={

        headerStyle:{
            backgroundColor: Platform.OS==='android'?'#40148c':''
        },
        headerTintColor:Platform.OS==='android'?'white':'#40148c'


}
const MealNavigation = createStackNavigator({
        MealScreen:categoriesMealScreen,
        MealDetailScreen:categoriesMealDetailScreen,
        DetailScreen:mealDetailScreen,
    },{
        defaultNavigationOptions:defaultNavigationOpt
    })

const FavNavigator=createStackNavigator({
    FavScreen:FavouriteScreen,
    DetailScreen:mealDetailScreen,
},{
    defaultNavigationOptions:defaultNavigationOpt
})
    
const filterNav=createStackNavigator({
    FilterScreen:FilterScreen
},{
    defaultNavigationOptions:defaultNavigationOpt
})

const BottomNaviagation =createBottomTabNavigator({
    Meals:{screen:MealNavigation,navigationOptions:{
        tabBarIcon:(tabInfo)=><Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor}></Ionicons>
    }},
    Favourite:{screen:FavNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=><Ionicons name="ios-star" size={30} color={tabInfo.tintColor}></Ionicons>
    }
}
},{tabBarOptions:{
    activeTintColor:'#40148c',
    activeBackgroundColor:''
    
}}
);
const SideDrawer=createDrawerNavigator({
    MealScreen:{screen:BottomNaviagation,navigationOptions:{
        drawerLabel:'Meals',
        
    }},
    Filter:filterNav
},{
    contentOptions:{
        activeTintColor:'#40148c',
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
})
export default createAppContainer(SideDrawer);