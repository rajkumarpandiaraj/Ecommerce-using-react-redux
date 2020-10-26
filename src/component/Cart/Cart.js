import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { calcTotal } from '../../Redux/action';
import { handleProceed } from '../../Redux/action';
import Cartitem from './Cartitem';
import Fade from 'react-reveal/Fade'
import Formcompo from '../Formcompo';

function Cart(props) {
    const {cartArr, total, calcTotal, proceed, handleProceed} = props;
    useEffect(() => {
        calcTotal();
    }, [cartArr, calcTotal])
    return (
        <div className='cart-container'>
            <div className='cart-nav'>
                <h2>You have {cartArr.length} products</h2>
            </div>
            <div className='hr'/>
            {
            <div className='cart'>
                {
                    cartArr.map(item => <Cartitem key={item._id} item={item}/>)
                }
            </div> 
            }
            {
                cartArr.length !== 0 &&  <Fade left><div className='cart-total'>
                                        <h2>Total : $ {total}</h2>
                                        <button className='proceed-btn add-cart-btn' onClick={handleProceed}>Proceed</button>
                                    </div></Fade>
            }
            {
                proceed && <Formcompo/>
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        cartArr : state.cartArr,
        total : state.total,
        proceed : state.proceed
    }
}
const mapDispatchToProps = dispatch => {
    return {
        calcTotal : () => dispatch(calcTotal()),
        handleProceed : () => dispatch(handleProceed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
