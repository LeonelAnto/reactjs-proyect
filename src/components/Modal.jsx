import React from 'react'
import { NavLink } from 'react-router-dom'

const Modal = (id) => {
  return (

      <div id='modalcontainer'>
        <h1>Compra realizada con exito</h1>
        <h2>Muchas gracias por confiar en nosotros!!</h2>
        <NavLink to={"/checkout"}><button>Volver</button> </NavLink>
        <NavLink to={"/"}><button>Finalizar e ir al home</button> </NavLink>
      </div>

  )
}

export default Modal
