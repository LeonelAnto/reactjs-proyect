import React, { createContext, useState } from 'react'

export const Cart = createContext()

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addCart = (product, productQuantity) => {
        let cartUpdated = [...cart]
        let cartQuantity = Number (quantity + productQuantity)     
        setQuantity(cartQuantity)  


        const productInCart = isInCart(product.id)
        
        
        if (productInCart){
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id){

                    return{
                        ...cartProduct, quantity: cartProduct.quantity + productQuantity
                    }

                }
                
                return cartProduct
            })
        
        }else{
            cartUpdated.push({...product, quantity : productQuantity})
        }
        setCart(cartUpdated)
        
    }



    const isInCart = (productId)=>{
        return cart.some(cartProduct => cartProduct.id === productId)
    }



    const itemDelete = (productId, productQuantity)=>{
        
        const cartUpdate = cart.filter(cartProduct => cartProduct.id !== productId)
        const cartQuantity = quantity - productQuantity
        setCart(cartUpdate)
        setQuantity(cartQuantity)
        
        
    }

    const clear = ()=>{
        const cartUpdate = []
        setCart(cartUpdate)
        setQuantity(0)
    }

    


  return (
    <Cart.Provider value={{cart,addCart,quantity, itemDelete, clear}}>{children}</Cart.Provider>
  )


}

export default CartProvider
