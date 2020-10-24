import React,{useEffect} from 'react';
import { removeFromCart } from '../../Redux/action';
import { calcTotal } from '../../Redux/action';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade'

function Cartitem(props) {
    const {item, removeFromCart, calcTotal} = props;
    useEffect(() => {
        calcTotal();
    }, [item.quantity, calcTotal])
    return (
        <Fade left>
        <div className='item'>
            <img src={item.image} alt='product'/>
            <div className='item-description'>
                <p>{item.title}</p>
                <div className='description-grp'>
                <h4>{item.quantity} X ${item.price}</h4>
                <button type='button' className='add-cart-btn remove-btn' onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
            </div>
        </div>
        </Fade>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart : (id) => dispatch(removeFromCart(id)),
        calcTotal : () => dispatch(calcTotal())
    }
}

export default connect(null, mapDispatchToProps)(Cartitem)
