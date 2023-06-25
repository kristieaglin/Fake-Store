import React, { useState, useEffect} from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
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
      <img src={product?.image} />
      <div className='details-info'>
        <h2>{product?.title}</h2>
        <h2>{product?.price?.toFixed()}€</h2>
        <h3>Description</h3>
        <p>{product?.description}</p>
      </div>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductDetail