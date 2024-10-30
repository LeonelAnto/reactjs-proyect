import React from 'react'

const ItemDetail = ({product}) => {
  console.log(product);
  
  return (
    <div>
      <img src={product.img}/>
      <h1>{product.model}</h1>
      <span>{product.description}</span>
      <span>{product.cost}</span>
    </div>
  )
}

export default ItemDetail
