import React, { useState, useEffect, useContext} from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'

function ProductDetail() {
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  const [addedToCart, setAddedToCart] = useState(false)

   useEffect(
    ()=>{
      //is this product in the cart
      setAddedToCart(cart.find(item=> item.id == product.id))
    }, [cart]
   )

  //id retrieval from params
  const {productId} = useParams()

  //create state to hold data
  const [product, setProduct] = useState('')

  //https://fakestoreapi.com/products/1
  useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res =>{
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className='details-container'>
      <div className='details-card'>
        <div className='image-container'>
          <img src={product?.image} />
        </div>
        <div className='details-info'>
          <h2>{product?.title}</h2>
          <h2>{product?.price?.toFixed()}€</h2>
          <h3>Description</h3>
          <p>{product?.description}</p>
          {
            addedToCart?
            <button onClick={()=>removeProduct(product?.id)}>Remove</button>
            :
            <button onClick={()=>addProduct(product)}>Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail