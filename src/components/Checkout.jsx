import React, { useContext, useState } from 'react'
import { Cart as CartContext } from '../contexts/CartContext'
import endPurchase from '../services/endPurchase'
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore"; 
import { db } from '../firebase/config';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [mostrar, setMostrar] = useState(false)
    const {cart, clear} = useContext(CartContext)
    const [id, setId] = useState()
    

  return (
    <div id='checkoutcontainer'>
        <form onSubmit={event => {event.preventDefault();
        setName(event.target.name.value)
        setSurname(event.target.surname.value)
        if(event.target.email.value === event.target.confirmEmail.value){
        setEmail(event.target.email.value)}
        
        
        (async ()=>{
            const orderCollectionRef = collection(db, "orders")
            const costs = cart.map((cartItem)=>{
                return cartItem.cost * cartItem.quantity
              })
        
            const res = costs.reduce((acc,item)=>{
                return acc = acc + item
            }, 0)

                try {
                
                const order = {
                    buyer: {
                        nombre:{name},
                        apellido:{surname},
                        correo: {email},
          
                    },
                    products: {...cart},
                    total: {res},
                    timestamp : serverTimestamp(),
            }
            
            try {
                const docRef = await addDoc(orderCollectionRef, order);
                
                let id = docRef.id
                setId(id)
                
                setMostrar(true)
                

              } catch (e) {
                
              }
              
              
            return order


                } catch (error) {
                
                    
                }
            
        })()

        }
        }>
            <p>Nombre</p>
            <input type="text" name='name'/>
            <p>Apellido</p>
            <input type="text" name='surname' />
            <p>Email</p>
            <input type="text" name='email' />
            <p>Confirmar Email</p>
            <input id='confirmemail' type="text" name='confirmEmail' />
            {
                mostrar &&
                <p>Compra realizada con exito, Tu id de compra es : {id}</p> 
            }
            <button type='submit' onClick={()=>endPurchase(cart)}> generar orden </button>
            <NavLink to={"/end"}><button onClick={clear}>Finalizar compra</button> </NavLink>
        </form>
    </div>
  )
}

export default Checkout

