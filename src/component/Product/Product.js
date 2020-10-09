import React from 'react'

function Product({product}) {
    return (
        <div className='product'>
            <img src={product.image} alt='product' className='product-img'/>
            <p className='title'>{product.title}</p>
            <div className='btn-flex'>
                <button className='add-cart-btn'>Add to cart</button>
                <h3 className='price'>${product.price}</h3>
            </div>
        </div>
    )
}

export default Product
