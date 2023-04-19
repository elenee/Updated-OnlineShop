import React from 'react'
import './ProductsList.css'

const ProductsList = ({products}) => {
  return (
    <ul>
        {products.map((product) => <img src={product.images[0]} />)}
    </ul>
  )
}

export default ProductsList 