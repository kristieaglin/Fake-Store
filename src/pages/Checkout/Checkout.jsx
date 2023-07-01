import React, { useState, useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

function Checkout() {
    const {cart} = useContext(CartContext)
    
    //initial cart value
    let cartTotal = 0
    //calculate total price of cart
    const calculateTotal = () =>{
        for (let i=0; i < cart.length; i++){
            cartTotal += cart[i].price;
        }
        console.log('total',cartTotal)
        return cartTotal
    }
    calculateTotal()

  return (
    <div className='checkout-container'>
        <div className='checkout-card'>
            <div className='title-container'>
                <p>Item</p>
                <div className='item-descriptions'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Remove</p>
                </div>
            </div>
            <div className='checkout-item'>
            {
                cart.length > 0?
                cart.map(item=><CheckoutItem key={item.id} product={item} />)
                :
                <p>Your cart is currently empty.</p>
            }
            </div>
            <p className='total'>Total {cartTotal?.toFixed()}€</p>
            <button className='checkout-btn'>Checkout</button>
        </div>
        
        
    </div>
  )
}

export default Checkout