import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

const CategoryGrid =props=>{
    return <TouchableOpacity style={{...style.list, ...{backgroundColor:props.color} } }onPress={props.onSelect}>
    <View ><Text style={style.text}>{props.title}</Text></View>
    </TouchableOpacity>
}
const style=StyleSheet.create({
    list:{
        flex:1,
       margin:10,
       height:100,
       justifyContent:'flex-end',
       alignItems:'flex-end',
       padding:10,
       borderRadius:10,
       shadowColor:'black',
       shadowOffset:{width:8,height:8},
       shadowOpacity:0.8,
       shadowRadius:9,
       elevation:3
    },
   
    text:{
        fontSize:20,
        fontFamily:'open-sans',
        textAlign:'right'
    }
})
export default CategoryGrid