import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
  
    <div>
        {products.map( (product) => {
            return (
                <Item item = {product} key={product.id} />
                
                
            )
        } )}
    </div>
  )
}

export default ItemList