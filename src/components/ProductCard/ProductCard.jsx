import React from 'react'
import './ProductCard.css'
import { IoHeartCircleSharp } from "react-icons/io5";
//IoHeartCircleSharp


function ProductCard({product}) {
  return (
    <div className='product-card'>
        <div className='img-container'> 
            <img src={product?.image} />
        </div>    
        <div className='product-info'>
            <div>
                <h2>{product?.title.slice(0,91)}</h2>
                <p className='product-category'>{product?.category.charAt(0).toUpperCase()+product?.category.slice(1)}</p>
            </div>
            <p className='product-price'>{product?.price.toFixed()}€</p>
        </div>
        <IoHeartCircleSharp className='heart-icon' />
    </div>
  )
}

export default ProductCard