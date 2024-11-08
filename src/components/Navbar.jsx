import React from 'react'
import favicon from '../assets/favicon.ico' 
import Cartwidget from './Cartwidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<header>
        <nav>
            <Link to={"/"} id='ico'>
                <img src={favicon} alt="" />
                <p id='title'>Shinyperlary</p>
            </Link>
            
            <div>
                <ul>
                    <li>
                        <Link to={"/category/Oppo"}>Oppo</Link>
                    </li>
                    <li>
                        <Link to={"/category/alcatel"}>Alcatel</Link>
                    </li>
                    <li>
                        <Link to={"/category/HP"}>HP</Link>
                    </li>
                    <li>
                        <Link to={"/category/Samsung"}>Samsung</Link>
                    </li>
                    <li>
                        <Link to={"/category/vivo"}>Vivo</Link>
                    </li>
                    <li>
                        <Link to={"/category/Motorola"}>Motorola</Link>
                    </li>
                    <li>
                        <Link to={"/category/Lenovo"}>Lenovo</Link>
                    </li>
                    <li>
                        <Link to={"/category/LG"}>LG</Link>
                    </li>
                    <li>
                        <Link to={"/category/Siemens"}>Siemens</Link>
                    </li>
                    <li>
                        <Link to={"/category/Karbonn"}>Karbonn</Link>
                    </li>
                </ul>
            </div>
            <Link to={"/cart"}> <Cartwidget /> </Link>
        </nav>
</header>


  )
}

export default Navbar
