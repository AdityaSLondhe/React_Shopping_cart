import React, { useContext } from 'react'
import { Products } from '../../Products'
import { Product } from './Product'
import './shop.css'
export const Shop = () => {
  return (
    <div className='Shop'>
        <div className="ShopTitle">
            <h1>Shop</h1>
        </div>
        <div className="Products">
            {Products.map((product)=>
              <Product data={product}/>
            )}
        </div>
    </div>
  )
}
