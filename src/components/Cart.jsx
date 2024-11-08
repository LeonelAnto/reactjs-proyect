import React, { useContext } from 'react'
import { Cart as CartContext } from '../contexts/CartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const {cart, clear} = useContext(CartContext)
    

    const costs = cart.map((cartItem)=>{
      return cartItem.cost * cartItem.quantity
    })

  const res = costs.reduce((acc,item)=>{
      return acc = acc + item
  }, 0)
    
  return (
    <div id='divcart'>

    {
      cart.length ? (
      <>
        {cart.map((cartItem)=>{
          return <CartItem item={cartItem} key={cartItem.id}/>
        })}

        <h2> preocio total = {res}</h2>

        <NavLink to={"/checkout"}> <button >Finalizar la Compra</button> </NavLink>  

        <button onClick={clear}>Borrar todos los productos</button>



      </>
      ) : (
      <>     
      <h1>no hay productos en el carrito</h1>

      <NavLink to={"/"}> Home </NavLink>
      </>
      
    )}

      
    </div>
  )
}

export default Cart
