import React, { useState, useEffect, useContext } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { IoHeartCircleSharp, IoHeartCircleOutline } from "react-icons/io5";
//IoHeartCircleSharp
//IoHeartCircleOutline

function ProductCard({product}) {
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  //variable to control icon
  // const addedToCart = false;
  //need state to control icons
  const [addedToCart, setAddedToCart] = useState(false)

   useEffect(
    ()=>{
      //is this product in the cart
      setAddedToCart(cart.find(item=> item.id == product.id))
    }, [cart]
   )


  return (
    <div className='product-card'>
        <div className='img-container'> 
            <img src={product?.image} />
        </div>    
        <div className='product-info'>
            <div>
                <h2><Link to={`/details/${product?.id}`}>{product?.title.slice(0,91)}</Link></h2>
                <p className='product-category'>{product?.category.charAt(0).toUpperCase()+product?.category.slice(1)}</p>
            </div>
            <p className='product-price'>{product?.price?.toFixed()}€</p>
        </div>
        {
          addedToCart?
          <IoHeartCircleOutline className='heart-icon' onClick={()=>removeProduct(product?.id)} />
          :
          <IoHeartCircleSharp className='empty-cart-icon' onClick={()=>addProduct(product)} />
        }
    </div>
  )
}

export default ProductCard