import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);
  const {id} = useParams ();


  useEffect(() => {
      
    (async ()=>{
      
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        
          setProducts({...docSnap.data(), id})
        } else {
        
}



      } catch (error) {
        
      }



    })()
    }, [id]
  )
  
  return product && <ItemDetail product={product}/>;
}

export default ItemDetailContainer
