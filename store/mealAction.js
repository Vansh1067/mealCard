export const TOGGLEFAV='toggle_Fav';
export const FILTER ='filter';

export const toggleFavourite=(id)=>{
    return {type:TOGGLEFAV,mealId:id}
}
export const filter=filterSetting=>{
    return {type:FILTER,applyFilter:filterSetting}
}