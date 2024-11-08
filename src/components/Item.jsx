import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {
  return (
    <div id='card'>
      <img id='img' src={item.img} />
      <h2>{item.model}</h2>
      <span>{item.type}</span>
      <span>${item.cost}</span>
      <Link to = { `/detail/${item.id}` }>
        <button>detail</button>
      </Link>
    </div>
  )
}

export default Item
