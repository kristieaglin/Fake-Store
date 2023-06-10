import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart

function Header() {
  return (
    <div className='header-container'>
        <h1>Fake Store</h1>
        <div className='cart-container'>
            <AiOutlineShoppingCart className='cart-icon' />
            <p>1</p>
        </div>
    </div>
  )
}

export default Header