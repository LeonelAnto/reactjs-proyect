import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import products from './assets/mockData.json'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  console.log(products);
  
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Navbar />

          <Routes>

            <Route path='/' element = { <ItemListContainer /> }/>
            <Route path='/category/:categoryId' element = { <ItemListContainer/> }/>
            <Route path='/detail/:id' element = { <ItemDetailContainer/> }/>
            
          
            <Route path='*' element = { <NotFound/> }/>
      
          </Routes>

      </BrowserRouter>
    </>
  )
}


export default App
