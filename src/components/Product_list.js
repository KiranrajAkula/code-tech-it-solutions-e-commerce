import React from 'react'
import "../App.css"

const Product_list = ({ product, addToCart }) => {
  return (
    <div className='flex'>
        {
    product.map((productItem, productIndex)=>{ 
        return (
            
                <div className='product-item'>
                    <img src={ productItem.images } className='img' alt='' />
                    <p>{productItem.title } | {productItem.brand}</p>
                    <p>Rs. {productItem.price} /- </p>
                    <button className='btn'
                    onClick={()=>{ addToCart(productItem)}}
                    >Add To Cart</button>
                </div>
            
        )
    })
        }
    </div>
  )
}

export default Product_list