import React from 'react'
import Productlist from './Productlist';
import Cart from '../Cart/Cart';
import '../../App.css';
import { connect } from 'react-redux'

function Productcontainer({isModalOpened}) {
    return (
        <div className='container' style={isModalOpened ? {overflow : 'hidden'} : {overflow : 'auto'}}>
            <Productlist/>
            <Cart/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isModalOpened : state.isModalOpened
    }
}
export default connect(mapStateToProps)(Productcontainer)
