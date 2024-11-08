import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();



  useEffect(() => {
   
    ;(async ()=>{

      try {

        let productsFiltered = []
      
      if(categoryId){

        const q = query(collection(db, "products"), where("category", "==", categoryId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {    
        
        productsFiltered.push({id: doc.id, ...doc.data()})
});


      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
        

        productsFiltered.push({id: doc.id, ...doc.data()})
        })
      }
        setProducts(productsFiltered)

      } catch (error) {
        
    
    
      }

    })()

}    );

  return <ItemList products={products} />;
};   

export default ItemListContainer;