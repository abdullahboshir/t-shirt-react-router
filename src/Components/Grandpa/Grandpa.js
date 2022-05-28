import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty'
import './grandpa.css'

/**
 * Context API
 * call createContext with a default value
 * set a variable of the context with upperCase
 * Make sure you eport thr context to use it in other places
 * wrap you child context using RingContext.provider
 * providr a balue
 * to consume the context from child component 
 * useContext hook and you will you need to pass the contextName 
 * Make sure you take notes  
 */

export const RingContext = createContext("Diamond")


const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Diamond Ring"

    const handleBuyHouse = () =>{
        setHouse(house + 1)
    }
    return (
      <RingContext.Provider value={[ornament, house]}>
            <div className='grandpa'>
            <h3>Grandpa</h3>
            <button onClick={handleBuyHouse}>Buy a House</button>
            <p>House: {house}</p>
           <div style={{display: 'flex'}}>
           <Father house = {house} ornament = {ornament}></Father>
          <Uncle house = {house}></Uncle>
          <Aunty house = {house}></Aunty>
           </div>
        </div>
      </RingContext.Provider>
    );
};

export default Grandpa;