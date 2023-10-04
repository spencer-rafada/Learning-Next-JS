// 'use client' // tells next js to be client side component
import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  )
}

export default ProductCard
