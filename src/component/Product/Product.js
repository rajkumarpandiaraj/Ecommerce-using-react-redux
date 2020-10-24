import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../Redux/action';
import { modalProduct } from '../../Redux/action';
import Fade from 'react-reveal/Fade'
// import { Link } from 'react-router-dom';

function Product(props) {
    const { product, addToCart, modalProduct } = props;
    return (
        <Fade bottom>
        <div className='product'>
            <img src={product.image} onClick={() => modalProduct(product._id)} alt='product' className='product-img'/>
            <p className='title'>{product.title}</p>
            <div className='btn-flex'>
                <button className='add-cart-btn' onClick={() => addToCart(product._id)}>Add to cart</button>
                <h3 className='price'>${product.price}</h3>
            </div>
        </div>
        </Fade>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart : (id) => dispatch(addToCart(id)),
        modalProduct : (id) => dispatch(modalProduct(id))
    }
}

export default connect(null, mapDispatchToProps)(Product)
