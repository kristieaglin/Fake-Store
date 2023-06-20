import React, {useEffect, useState} from 'react'
import './CategoryBar.css'
import axios from 'axios'

function CategoryBar({setProducts}) {

    //https://fakestoreapi.com/products/categories

    const [category, setCategory] = useState([])

    useEffect(
        ()=>{
            //make api call to retrieve and print categories
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res => {
                console.log(res.data)
                setCategory(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )

    const filterCategories = (category) => {
        //filter out the product categories
        console.log(category)
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
            console.log(res.data)
            //change what categories are displayed
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }

    const resetCategories = () => {
        //reset data for All button
        //https://fakestoreapi.com/products
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className='bar-container'>
            <button onClick={resetCategories}>All</button>
            {
                 category.map(item=><button key={item} onClick={()=>filterCategories(item)}>{item.charAt(0).toUpperCase()+item.slice(1)}</button>)
            }
        </div>
    )
}

export default CategoryBar