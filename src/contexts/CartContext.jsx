import { useState, createContext, useEffect } from "react";

//create context using hook
export const CartContext = createContext()


export default function CartContextProvider(props){
    //create global state here
    const [cart, setCart] = useState([])

    useEffect(
        ()=>{
            //is there a value in local storage
            const storedCart = localStorage.getItem('cartList')
            //only use if there was a value
            if(storedCart){
                //use this to initialize
                setCart(JSON.parse(storedCart))
            }
        },[]
    )
    
    useEffect(
        ()=>{
            //save new value to local storage
            localStorage.setItem('cartList', JSON.stringify(cart))
        },[cart]
    )

    const addProduct = (productToAdd) =>{
        console.log('adding', productToAdd)
        //add itemToAdd to cart
        let newCart = [...cart, productToAdd]
        //replace state
        setCart(newCart)
        console.log(newCart)
    }

    const removeProduct = (productId) =>{
        console.log('remove', productId)
        //remove productId and keep others
        let newCart = cart.filter(item => item.id != productId)
        //replace state
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct}}>
            {props.children}
        </CartContext.Provider>
    )
}