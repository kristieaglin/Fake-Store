import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Homepage.css'

function Homepage() {
    //https://fakestoreapi.com/products

    const [products, setProducts] = useState([])
    
    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
                })
            .catch(err => console.log(err))
        }, []
    )

    return (
        <div className='homepage-container'>
            <div className='card-container'>
                {
                    products.map(item =><ProductCard key={item.id} product={item} />)
                }
            </div>
        </div>
  )
}

export default Homepage