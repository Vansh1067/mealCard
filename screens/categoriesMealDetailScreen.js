import React from 'react';
import {useSelector} from 'react-redux';

import { CATEGORIES,MEALS } from '../data/12.1 dummy-data.js';


import MealList from '../components/MealList';

const CategorieMealScreen = props =>{
    
    const catId =props.navigation.getParam('categoryId');
    const availableMeals=useSelector(state=>state.meals.filterMeal);
    const displayMeal=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
    return <MealList listData={displayMeal} navigation={props.navigation}></MealList>
}
CategorieMealScreen.navigationOptions=navData=>{
   
    const catId =navData.navigation.getParam('categoryId');
    const selectedMeal=CATEGORIES.find(cat=>cat.id===catId);
    return {
        headerTitle:selectedMeal.title,
    }
}


export default CategorieMealScreen;