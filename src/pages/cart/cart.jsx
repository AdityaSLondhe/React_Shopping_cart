import React from 'react'
import {Products} from '../../assets/product'
import { Product } from '../shop/Product'
export const Cart = () => {
  // const [cart,setcartItems]

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {Product.map((ele)=>{

      })}
      </div>
    </div>
  )
}
