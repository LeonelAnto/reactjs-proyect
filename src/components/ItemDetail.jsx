import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import { Cart } from '../contexts/CartContext';




const ItemDetail = ({product}) => {
  
  const {addCart} = useContext(Cart)

  const [ItemCountVisibility, setItemCountVisibility] = useState(true)

  const handleCart = (quantity)=>{

        setItemCountVisibility(false)
        addCart(product, quantity)
  }
  
  return (
    <div id='detail'>
      <img id='imgdetail' src={product.img}/>
      <h1>{product.model}</h1>
      <span>{product.description}</span>
      {ItemCountVisibility ? <ItemCount addCart={handleCart}/> : (<NavLink to={"/cart"}> <button > Ir al carrito </button> </NavLink>)}
      <span>${product.cost}</span>
    </div>
  )
}

export default ItemDetail
