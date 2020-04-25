import React, { useCallback, useEffect } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { useSelector,useDispatch } from 'react-redux'

import {toggleFavourite} from '../store/mealAction';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/CustomHeaderButton';
import { ScrollView } from 'react-native-gesture-handler';
import { cos } from 'react-native-reanimated';

const MealDetailScreen = props =>{
    const dispatch=useDispatch();
    const mealId=props.navigation.getParam('mealId');
    const availableMeals=useSelector(state=>state.meals.meals)
    const FavMeals=useSelector(state=>state.meals.favMeals)
    const isFavourite=FavMeals.some(meal=>meal.id===mealId)

    const SelectedMeal=availableMeals.find(meal=>meal.id===mealId);
    const toggleFavHandler=useCallback(()=>{
        dispatch(toggleFavourite(mealId));
    },[dispatch,mealId])
    useEffect(()=>{
        props.navigation.setParams({
            toggleFav:toggleFavHandler
        });
    },[toggleFavHandler])
    useEffect(()=>{
     
        props.navigation.setParams({
            isFav:isFavourite
        });
    },[isFavourite]) 
   
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
                    {SelectedMeal.ingredients.map(ing=><View  key={ing}  style={style.listStep}><Text style={style.listText}>{ing}</Text></View>)}
                    </View>
    </View>
    <View>
    <View>
                    <Text style={style.title}>Steps</Text>
                    </View>
                    <View >
                    {SelectedMeal.steps.map(ing=><View key={ing} style={style.listStep}><Text  style={style.listText}>{ing}</Text></View>)}
                    </View>
    </View>
 
</ScrollView>
}
MealDetailScreen.navigationOptions=navData=>{
    const mealtitle=navData.navigation.getParam('mealTitle');
    const toggleFavHandler=navData.navigation.getParam('toggleFav');
    const isFav=navData.navigation.getParam('isFav');

    return {
        headerTitle:mealtitle,
        headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
            title="Favourite"
            iconName={isFav? 'ios-star' :'ios-star-outline'}
            onPress={toggleFavHandler}
            >

            </Item>

        </HeaderButtons>
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