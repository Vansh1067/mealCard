import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import { MEALS } from '../data/12.1 dummy-data.js';


import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/CustomHeaderButton';
import { ScrollView } from 'react-native-gesture-handler';

const MealDetailScreen = props =>{
    const mealId=props.navigation.getParam('mealId');
    const SelectedMeal=MEALS.find(meal=>meal.id===mealId);
    console.log(SelectedMeal)
return <ScrollView >
    <View style={style.listCont}>   

        <View style={style.imageCont}>
        <Image style={style.image} source={{uri:SelectedMeal.imageUrl}}></Image>
        </View>
   
    <View style={style.textCont}>
                    <Text style={style.text}>{SelectedMeal.duration}</Text>
                    <Text style={style.text}>{SelectedMeal.complexity}</Text>
                    <Text style={style.text}>{SelectedMeal.affordability}</Text>
    </View>
  
   
    </View>
    <View >
        <View>
                    <Text style={style.title}>Ingredients</Text>
                    </View>
                    <View >
                    {SelectedMeal.ingredients.map(ing=><View style={style.listStep}><Text style={style.listText}>{ing}</Text></View>)}
                    </View>
    </View>
    <View>
    <View>
                    <Text style={style.title}>Steps</Text>
                    </View>
                    <View >
                    {SelectedMeal.steps.map(ing=><View style={style.listStep}><Text style={style.listText}>{ing}</Text></View>)}
                    </View>
    </View>
 
</ScrollView>
}
MealDetailScreen.navigationOptions=navData=>{
    const mealId=navData.navigation.getParam('mealId');
    SelectedMeal=MEALS.find(meal=>meal.id===mealId);
    return {
        headerTitle:SelectedMeal.title,
        headerRight:(<HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
            title="Favourite"
            iconName='ios-star'
            onPress={()=>{console.log("Hogya")}}
            >

            </Item>

        </HeaderButtons>)
    }
        

}
const style=StyleSheet.create({
    listCont:{
        backgroundColor:'rgba(0,0,0,0.4)',
        margin:10,
        borderRadius:8,
        overflow:'hidden',
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
        listStep:{
                margin:10,
                borderWidth:3,
                borderRadius:2,
                borderColor:'black',
                padding:5,
            },
       listText:{
        textAlign:'justify',
        fontFamily:'open-sans',
        color:'#40148c'

       },
        title:{
            
            fontSize:26,
            fontFamily:'open-sans-bold',
            textAlign:'center',
            
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

export default MealDetailScreen;