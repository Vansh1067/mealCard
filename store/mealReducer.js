import {MEALS} from '../data/12.1 dummy-data.js';
import {TOGGLEFAV} from './mealAction';

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
        default:
            return state;
    }
  
}

export default mealReducer;