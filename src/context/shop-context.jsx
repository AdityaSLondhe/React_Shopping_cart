import React, { createContext, useState } from 'react'
import { Products } from '../Products';

export const ShopContext =createContext(null);

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<Products.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItem,setCartItem]=useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    } 

  return (<ShopContext.Provider>{props.children}</ShopContext.Provider>)
}
