import React, { useEffect, useState } from 'react'
import mockProducts from '../assets/mockData.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);
  const {id} = useParams ();


  useEffect(() => {
      const producto = mockProducts.find(productToFind => productToFind.id === Number(id))
      console.log("id encontrado");
      setProducts(producto)
    
    }, [id]
  )
  
  return product && <ItemDetail product={product}/>;
}

export default ItemDetailContainer
