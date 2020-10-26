import React from 'react';
import { connect } from 'react-redux';
import { handleNameChange } from '../Redux/action';
import { handleEmailChange } from '../Redux/action';
import { handleAddressChange } from '../Redux/action';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'


function Formcompo(props) {
    const {name,email, address, handleNameChange, handleEmailChange,handleAddressChange} = props;
    return (
        <Fade right>
        <form className='address-form'>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type ='text' value={email} onChange={handleEmailChange} name='email' id='email' placeholder='Email'/>
            </div>
            <div className='form-control'>
                <label htmlFor='user-name'>Name</label>
                <input type='text' value={name} onChange={handleNameChange} name='name' id='user-name' placeholder='Name'/>
            </div>
            <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <input type='text' value={address} onChange={handleAddressChange} name='address' id='address' placeholder='Address'/>
            </div>
            <div className='check-flex'>
                <Link to='/confirmation'>
                    <button className ='add-cart-btn checkout-btn'>checkout</button>
                </Link>
            </div>
        </form>
        </Fade>
    )
}
const mapStateToProps = state => {
    return {
        name : state.name,
        email : state.email,
        address : state.address,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleNameChange :  (e) => dispatch(handleNameChange(e)),
        handleEmailChange :  (e) => dispatch(handleEmailChange(e)),
        handleAddressChange :  (e) => dispatch(handleAddressChange(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formcompo)
