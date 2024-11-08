import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './contexts/CartContext'
import Checkout from './components/Checkout'
import Modal from './components/Modal'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>

      <CartProvider>
          <BrowserRouter>
      
            <Navbar />

              <Routes>

                <Route path='/' element = { <ItemListContainer /> }/>
                <Route path='/category/:categoryId' element = { <ItemListContainer/> }/>
                <Route path='/detail/:id' element = { <ItemDetailContainer/> }/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/checkout' element = {<Checkout />}/>
                <Route path='/end' element = {<Modal/>}/>
            
          
                <Route path='*' element = { <NotFound/> }/>
      
              </Routes>

            </BrowserRouter>
      </CartProvider>
    </>
  )
}


export default App
