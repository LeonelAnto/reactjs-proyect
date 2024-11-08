import React, { useContext } from 'react'
import {Cart as cartQuantity} from '../contexts/CartContext'
import cart from '../assets/cart.svg'

const Cartwidget = () => {


  const {quantity} = useContext(cartQuantity)


  return (
    <div >
      <img id='cartwidget' src={cart} alt="" />
      <span>({quantity})</span>
    </div>
  )
}

export default Cartwidget
