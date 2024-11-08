import React from 'react'
import { useState } from 'react'

const ItemCount = ({addCart}) => {

const [count, setCount] = useState(1)

const onAdd = () => {
    setCount(prevCount => prevCount + 1)
}

const discount = () => {
    if(count > 0){
        setCount(prevCount => prevCount - 1)
    }
    
}

  return (
    <div>
      <h2>Cantidad de productos</h2>
      <div>
        <button onClick={onAdd}>+</button>
        <span>{count}</span>
        <button onClick={discount}>-</button>
      </div>
      <button onClick={()=>{addCart(count)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
