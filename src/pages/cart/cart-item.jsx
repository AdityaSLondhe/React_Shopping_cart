import React from 'react'
import "./cart.css"
import { Product } from '../shop/Product'

export const CartItem = (props) => {
  const {id,productName,productImage,price}=props.data;

  const itemCount=props[id];
  return (<div className='cartItem'>
    <img src={productImage}/>
    <div className='description'>
      <p><b>{productName}</b></p>
      <p> ${price}</p>
      <div className='countHandler'>
        <button> - </button>
        <input/>
        <button> + </button>
      </div>
    </div>
    </div>)
}
