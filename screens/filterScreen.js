import React, { useState, useCallback, useEffect } from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton'
const SwitchFilter=props=>{
    return  <View style={style.switchCont}>
    <Text style={style.text}>{props.children} </Text>
     <Switch
     value={props.value}
     onValueChange={newValue=>props.onChange(newValue)}
     trackColor={{true:'#401408c'}}

     ></Switch>
      
  </View>
}
const FilterScreen = props =>{
    const [isGlutenFree,setIsGlutenFree]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);
    const [isVeganFree,setIsVeganFree]=useState(false);
    const [isVegFree,setIsVegFree]=useState(false);
    
        const applyFilter= {
            GlutenFree:isGlutenFree,
            LactoseFree:isLactoseFree,
            VeganFree:isVeganFree,
            Vegetarian:isVegFree
        }
      

   // },[isGlutenFree,isLactoseFree,isVegFree,isVeganFree]);
useEffect(()=>{
    props.navigation.setParams({save:applyFilter});
},[isGlutenFree,isLactoseFree,isVegFree,isVeganFree])

    return <View >
        <View style={style.titleCont}>
        <Text style={style.title}>Apply Filter</Text>
        </View>
        <SwitchFilter value={isGlutenFree} onChange={setIsGlutenFree}>Gluten-Free</SwitchFilter>
        <SwitchFilter value={isLactoseFree} onChange={setIsLactoseFree}>Lactose-Free</SwitchFilter>
        <SwitchFilter value={isVeganFree} onChange={setIsVeganFree}>Vegan</SwitchFilter>
        <SwitchFilter value={isVegFree} onChange={setIsVegFree}>Vegetarian</SwitchFilter>

        </View>
}
FilterScreen.navigationOptions=navdata=>{
    return {
        headerTitle:"Filter",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
     onPress={()=>{navdata.navigation.toggleDrawer()}}></Item></HeaderButtons>,
     headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-save'
     onPress={()=>{console.log(navdata.navigation.getParam('save'))}}></Item></HeaderButtons>
    }
    
    }
const style=StyleSheet.create({
titleCont:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
    
},
title:{
    fontFamily:'open-sans-bold',
    fontSize:25
},
switchCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15
},
text:{
    fontSize:20,
    fontFamily:'open-sans-bold'
}

})

export default FilterScreen;