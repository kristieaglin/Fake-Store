import React, { useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

function Checkout() {
    const {cart} = useContext(CartContext)
    console.log(cart)
    // console.log(cart[0].price)

    const calculatePrice = () =>{
            for (let i=0; i < cart.length; i++){
                let cartTotal = cart[i].price++;
                console.log(cartTotal)
            }
    }
    calculatePrice()

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
            <p className='total'>Total €</p>
            <button className='checkout-btn'>Checkout</button>
        </div>
        
        
    </div>
  )
}

export default Checkout