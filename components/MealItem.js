import React from 'react';
import {View,StyleSheet,Text,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem =props=>{
  
    return <View style={style.listCont}>
        <TouchableOpacity onPress={props.onSelect}>
        <View style={style.list}>
            <View style={style.imageCont}>
                <ImageBackground style={style.image} source={{uri:props.data.imageUrl}}>
                    <View style={style.titleCont}>
                <Text style={style.title} numberOfLines={1}>{props.data.title}</Text>
                </View>
                </ImageBackground>
            
            </View>
            <View style={style.textCont}>
                    <Text style={style.text}>{props.data.duration}</Text>
                    <Text style={style.text}>{props.data.complexity}</Text>
                    <Text style={style.text}>{props.data.affordability}</Text>
            </View>
        </View>
        </TouchableOpacity>
       </View>
}

const style=StyleSheet.create({
    listCont:{
        backgroundColor:'rgba(0,0,0,0.4)',
        margin:10,
        borderRadius:8,
        overflow:'hidden'
    },
    list:{
    height:200,

    },
    imageCont:{
        height:'85%',
    
    },
    image:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    
    },
    titleCont:{
        marginVertical:5,
        backgroundColor:'rgba(0,0,0,0.4)',
    },
    title:{
        padding:3,
        fontSize:20,
        fontFamily:'open-sans-bold',
        textAlign:'right',
        color:'white'
    },
    textCont:{
        height:'15%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:8,
        paddingVertical:5
    },
    text:{
        fontFamily:'open-sans',
        fontSize:15
    }
})

export default MealItem;