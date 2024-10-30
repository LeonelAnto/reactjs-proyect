import React from 'react'
import cart from '../assets/cart.svg'

const Cartwidget = () => {
  return (
    <div >
      <img id='cartwidget' src={cart} alt="" />
      <span>(1)</span>
    </div>
  )
}

export default Cartwidget
