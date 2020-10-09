import React from 'react';
import { connect } from 'react-redux';
import Cartitem from './Cartitem'

function Cart(props) {
    const {cartArr} = props;
    return (
        <div className='cart-container'>
            <div className='cart-nav'>
                <h2>You have 3 products</h2>
            </div>
            <div className='hr'/>
            <div className='cart'>
                {
                    cartArr.map(item => <Cartitem key={item._id} item={item}/>)
                }
            </div> 
            <div className='cart-total'>
                <h2>Total : $187</h2>
                <button className='proceed-btn'>Proceed</button>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        cartArr : state.cartArr
    }
}

export default connect(mapStateToProps)(Cart)
