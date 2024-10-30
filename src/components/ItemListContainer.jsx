import React, { useState, useEffect } from 'react'
import mockProducts from '../assets/mockData.json'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });

    productos
      .then((response) => {
        const productsFiltered = categoryId
          ? response.filter((product) => product.category === categoryId)
          : response;

        setProducts(productsFiltered);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;