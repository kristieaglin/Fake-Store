import React, { useContext } from 'react'
import './CheckoutItem.css'
import { Link } from 'react-router-dom'
import { BsTrash } from "react-icons/bs";
import { CartContext } from '../../contexts/CartContext';
//BsTrash

function CheckoutItem({product}) {
  const { removeProduct } = useContext(CartContext)
        
  return (
    <div className='item-container'>
        <div className='checkout-img'>
            <img src={product?.image} />
        </div>
        <p className='item-description'><Link to={`/details/${product?.id}`}>{product?.title.slice(0,20)+'...'}</Link></p>
        <div className='item-info'>
            <p>{product?.price?.toFixed()}€</p>
            <p>1</p>
            <BsTrash className='trash-icon' onClick={()=>removeProduct(product?.id)} />
        </div>
    </div> 
  )
}

export default CheckoutItem