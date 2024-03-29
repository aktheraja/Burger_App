import React from 'react';
import Aux from '../../../hoc/Auxi'
const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return( <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
        </li>)
    });

    return(
    <Aux>
        <h3>your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to checkout</p>
    </Aux>
    )
};
export default orderSummary;