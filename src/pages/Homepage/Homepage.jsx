import axios from 'axios'
import React, {useEffect, useState} from 'react'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Homepage.css'

function Homepage() {
    //https://fakestoreapi.com/products

    const [products, setProducts] = useState([])
    
    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                // console.log(res.data)
                setProducts(res.data)
                })
            .catch(err => console.log(err))
        }, []
    )

    return (
        <div className='homepage-container'>
            <CategoryBar setProducts={setProducts} />
            <div className='card-container'>
                {
                    products.map(item =><ProductCard key={item.id} product={item} />)
                }
            </div>
        </div>
  )
}

export default Homepage