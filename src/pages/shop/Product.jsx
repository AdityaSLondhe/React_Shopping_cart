import React from 'react'
import './shop.css'
export const Product = (props) => {
    const { id, productName, price, productImage} = props.data;

  return (
    <div className='Product'>
        <img src={productImage} alt="image" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn'>Add to Cart</button>
    </div>
  )
}
