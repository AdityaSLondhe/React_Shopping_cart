import React, { useContext } from 'react'
import { Products } from '../../Products'
import { CartItem } from './cart-item'
import { Product } from '../shop/Product'
import { ShopContext } from '../../context/shop-context'
import "./cart.css"
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cartItems, addToCart, removeFromCart ,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount= getTotalCartAmount();

  const navigate= useNavigate();
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
      {totalAmount===0? <h1>Your Cart is Empty!</h1>:<div className='checkout'> 
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=> navigate("/")}> Continue Shopping</button>
        <button> Checkout</button>
      </div>}
      
    </div>
  )
}
