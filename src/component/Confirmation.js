import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { handleConfirmation } from '../Redux/action';

function Confirmation(props) {
    const {name, email, total, cartArr, handleConfirmation} = props;
    const date = JSON.stringify(new Date());


    return (
        <div className='confirmation-container'>
            <div className='confirmation-content'>
                <h1 className='green'>Order has been confirmed</h1>
                <div className='order'>
                    <p>Name</p>
                    <p>{name}</p>
                </div>
                <div className='order'>
                    <p>Email</p>
                    <p>{email}</p>
                </div>
                <div className='order'>
                    <p>Total</p>
                    <p>${total}</p>
                </div>
                <div className='order'>
                    <p>Date</p>
                <p>{date}</p>
                </div>
                <div className='order'>
                    <p>Items</p>
                    <div className='order-items'>
                        {
                            cartArr.map(item => <p className='order-item' key={item._id}>{item.quantity} X ${item.title}</p>)
                        }
                    </div>
                </div>
                <Link to='/'>
                    <button onClick={handleConfirmation} className='add-cart-btn btn'>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartArr : state.cartArr,
        name : state.name,
        email : state.email,
        total : state.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleConfirmation : () => dispatch(handleConfirmation())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
