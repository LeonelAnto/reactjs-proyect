import React, { useContext } from 'react'
import { Cart } from '../contexts/CartContext'



const CartItem = ({item}) => {

  const {itemDelete} = useContext(Cart)


  return (
    <div id='cartitem'>
        <img id='cartimg' src={item.img} />
        <h2 id='space'>{item.model}</h2>
        <span id='space'>{item.type}</span>
        <span id='space'>${item.cost}</span>
        <span id='space'>{item.quantity}</span>
        <button onClick={()=>itemDelete(item.id, item.quantity)}>Delete</button>
        
    </div>
  )
}

export default CartItem
