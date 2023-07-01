import React, { useContext } from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


function Header() {
  const {cart} = useContext(CartContext)

  return (
    <div className='header-container'>
        <Link to='/'>Fake Store</Link>
        <div className='cart-container'>
            <Link to='/checkout'>
              <AiOutlineShoppingCart className='cart-icon' />
              <p>{cart.length}</p>
            </Link>   
        </div>
    </div>
  )
}

export default Header