import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Redux/action'
import { modalClose } from '../Redux/action';
import Zoom from 'react-reveal/Zoom'


function Modal(props) {
    const { modalProductObj, isModalOpened, addToCart, modalClose} = props;
    const { image, availableSizes, description ,title,  _id, price } = modalProductObj;

    return (
        <Zoom bottom>
        <div className='modal' style={isModalOpened ? {display : 'block'} : {display : 'none'}}>
            <div className='modal-container'>
                <img src={image} alt='product'/>
                <div className='modal-description'>
                <p className='modal-title'>{title}</p>
                <p className='modal-product-description'>{description}</p>
                <div className='sizes-flex'>
                    <p>Available Sizes : </p>
                    <ul className='sizes'>
                        {
                            availableSizes && availableSizes.map(size => <li key={size} className='size'>{size}</li>)
                        }
                    </ul>
                </div>
                <div className='btn-flex'>
                    <button className='home-btn add-cart-btn' onClick={modalClose}>Back To Home</button>
                    <button className='modal-btn add-cart-btn' onClick={() => addToCart(_id)}>Add to cart</button>
                    <h3 className='price'>${price}</h3>
                </div>
                </div>
            </div>
        </div>
        </Zoom>
    )
}

const mapStateToProps = state => {
    return {
        modalProductObj : state.modalProduct,
        isModalOpened : state.isModalOpened,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addToCart : (id) => dispatch(addToCart(id)),
        modalClose : () => dispatch(modalClose())
    } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
