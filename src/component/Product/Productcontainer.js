import React from 'react'
import Productlist from './Productlist';
import Cart from '../Cart/Cart';
import '../../App.css';

function Productcontainer() {
    return (
        <div className='container'>
            <Productlist/>
            <Cart/>
        </div>
    )
}

export default Productcontainer
