import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";


function Header() {
  return (
    <div className='header-container'>
        <a href='/'>Fake Store</a>
        <div className='cart-container'>
            <AiOutlineShoppingCart className='cart-icon' />
            <p>1</p>
        </div>
    </div>
  )
}

export default Header