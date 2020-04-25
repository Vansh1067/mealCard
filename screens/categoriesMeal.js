import React from 'react';
import {PlatForm} from 'react-native';
import {View,Text,StyleSheet,FlatList} from 'react-native';

import{ CATEGORIES} from '../data/12.1 dummy-data.js'
import CategoryGrid from '../components/categoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton';




const CategorieScreen = props =>{
    const renderItemHandler=(itemData)=>{
        return <CategoryGrid title={itemData.item.title} color={itemData.item.color} onSelect={()=>{props.navigation.navigate({routeName:'MealDetailScreen',params:{
            categoryId:itemData.item.id
        }})}}></CategoryGrid>
    }
    return <FlatList data={CATEGORIES} keyExtractor={(item,index)=>item.id} numColumns={2} renderItem={renderItemHandler}>

    </FlatList>
}



CategorieScreen.navigationOptions=navdata=>{
    return {
    headerTitle:'Meal Categories',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
     onPress={()=>{navdata.navigation.toggleDrawer()}}></Item></HeaderButtons>
    }
   
}

const style=StyleSheet.create({
    list:{
        flex:1,
       margin:50,
       height:100
    }
})

export default CategorieScreen;