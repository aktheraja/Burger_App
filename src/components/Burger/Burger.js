import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props)=>{
    //creating a array of lengths depending on the object, e.g cheese will have length two and salad length one. create a unique key
    //with igKey(e.g cheese) plus index
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,index) =>{
        return <BurgerIngredient key ={igKey + index} type={igKey} />
    });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    console.log(transformedIngredients)
    if (transformedIngredients.length===0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};
export default burger;