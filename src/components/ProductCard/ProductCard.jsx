import React from 'react'
import './ProductCard.css'
import { IoHeartCircleSharp } from "react-icons/io5";
//IoHeartCircleSharp


function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product?.image} />
        <div className='product-info'>
            <h2>{product?.title}</h2>
            <p className='product-category'>{product?.category}</p>
            <p className='product-price'>{product?.price.toFixed()}€</p>
        </div>
        <IoHeartCircleSharp className='heart-icon' />
    </div>
  )
}

export default ProductCard