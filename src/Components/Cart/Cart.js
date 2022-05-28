import React from 'react';
import "./cart.css"

const Cart = ({carts, handleRemoveFromCart}) => {

    // Conditional rendering options 
    // 1. Element variable 
    // 2. ternary operator condition ? true : false 
    // 3. && Operator or shorhand 
    // 4. || 
    let command;
    if(carts.length === 0){
        command = <p>Please add at least one Item</p>
    }
    else if(carts.length === 1){
        command = <p>Please add more Item</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h2>Items Selected: {carts.length}</h2>
           {
               carts.map(cart =>  <p>
                {cart.name}
            <button onClick={() => handleRemoveFromCart(cart)}>X</button>
            </p>)
           }
           {carts.length === 0 || <p className='orange'>YAY!! You are buying</p>}
           {carts.length === 3 && <div className='orange'>
               <h3>Trigonal</h3>
               <p>Gift for 3 mens</p>
               </div>}
           {
               carts.length !== 4 ? <p>keep adding</p> : <button>Remove all </button>
           }
           {carts.length === 4 && <button className='orange'>Review Order</button>}
                    {command}
        </div>
    );
};

export default Cart;