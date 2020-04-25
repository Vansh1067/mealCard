import React, { useEffect } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {useSelector} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const MealList = props =>{

    
    const displayRenderItem =(itemData)=>{
        
        
        
        
    return <MealItem data={itemData.item} onSelect={()=>{props.navigation.navigate({routeName:'DetailScreen',params:{
        mealId:itemData.item.id,
        mealTitle:itemData.item.title,
        
      

    }})}}></MealItem>
    }
    
    return <FlatList data={props.listData} keyExtractor={(item=>item.id)} renderItem={displayRenderItem}></FlatList>
}

const style=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealList;