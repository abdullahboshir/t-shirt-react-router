import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import "./home.css"

const Home = () => {
    const [tShirts, setTShirts] = useTShirts([]);
    const [carts, setCarts] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exists = carts.find(cart => cart._id === tShirt._id);
        if (exists) {
            alert("Item already added")
        }
        else {
            let newCart = [...carts, tShirt];
            setCarts(newCart)
        }
    };


    const handleRemoveFromCart = (selectedItem) => {
        const removeCartItem = carts.filter(cart => cart._id !== selectedItem._id);
        setCarts(removeCartItem)
    }
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    carts={carts}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;