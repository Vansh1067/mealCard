import {MEALS} from '../data/12.1 dummy-data.js';
import {TOGGLEFAV, FILTER} from './mealAction';

const initialState={
    meals:MEALS,
    filterMeal:MEALS,
    favMeals:[]
}

const mealReducer=(state=initialState,action)=>{

    switch(action.type){
        case TOGGLEFAV:
            const existindIndex=state.favMeals.findIndex(meal=>meal.id===action.mealId);
            if(existindIndex>=0){
                const updatedFavMeals=[...state.favMeals];
                updatedFavMeals.splice(existindIndex,1)
                
                return {...state,favMeals:updatedFavMeals}
            }else{
                
                const meal=state.meals.find(meal=>meal.id===action.mealId);
                return {...state,favMeals:state.favMeals.concat(meal)}
            }
        case FILTER:
            const appliedFilter=action.applyFilter;
            console.log(appliedFilter)
            const updatedFilterMeals=state.meals.filter(meal=>{
                
                if(appliedFilter.GlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.LactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilter.VeganFree && !meal.isVegan){
                    return false;
                }
                if(appliedFilter.Vegetarian && !meal.isVegetarian){
                    return false;
                }
                return true
            })
            return {...state,filterMeal:updatedFilterMeals}
        default:
            return state;
    }
  
}

export default mealReducer;