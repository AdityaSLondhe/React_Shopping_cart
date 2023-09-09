import React, { useContext } from 'react'
import { Products } from '../../Products'
import { CartItem } from './cart-item'
import { Product } from '../shop/Product'
import { ShopContext } from '../../context/shop-context'
import "./cart.css"
export const Cart = () => {
  const {cartItems, addToCart, removeFromCart}=useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {Products.map((product)=>{
        <Product data={product}/>
        if(cartItems[product.id]!==0){
          return <CartItem data={product}/>;
        }
      })}
      </div>
    </div>
  )
}
