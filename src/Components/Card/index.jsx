import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({ img, title, price, id }) {
  return (
    <div className='card'>
      <img src={img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>Price: ${price}</p>
        <Link to={`/product-detail/${id}`} className="btn btn-primary">Go somewhere </Link>
      </div>
    </div >
  )
}