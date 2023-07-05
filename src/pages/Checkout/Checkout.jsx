import React, { useState, useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none'
    },
    overlay:{
        backgroundColor:'rgba(217, 217, 217, .7)'
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));

function Checkout() {
    const {cart, emptyCart} = useContext(CartContext)

    //activate useNavigate
    const navigate = useNavigate()

    const goHome = () =>{
        emptyCart(cart)
        navigate('/')
    }

    //create state to control modal
    const [isOpen, setIsOpen] = useState(false)


    
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
            <button className='checkout-btn' onClick={()=>setIsOpen(true)}>Checkout</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={()=>setIsOpen(false)}
                style={customStyles}
                contentLabel="Checkout Modal"
            >
                <div className='modal-container'>
                <p>Your Order was successful!</p>
                <p>Check your email for the order conformation. Thank you for shopping with Fake Store!</p>
                <button className='modal-btn' onClick={goHome}>Return to Main Page</button>
                </div>
            </Modal>
        </div>
        
        
    </div>
  )
}

export default Checkout