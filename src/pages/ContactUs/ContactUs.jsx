import React from 'react'
import './ContactUs.css'


function ContactUs() {
  return (
    <div className='contact-container'>
        <div className='contact-card'>
            <h2 className='contact-heading'>Contact Us</h2>
            <form className='form-container'>
                <input className='input1' type='text' placeholder='First Name' />
                <input className='input1' type='text' placeholder='Last Name' />
                <input className='input2' type='text' placeholder='Write your message here'/>
            </form>
            <button className='submit-btn'>Submit</button>
        </div>
    </div>
  )
}

export default ContactUs