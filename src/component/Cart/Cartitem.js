import React from 'react'

function Cartitem(props) {
    const {item} = props;
    return (
        <div className='item'>
            <img src={item.image} alt='product'/>
            <div className='item-description'>
    <p>{item.title}</p>
    <div className='description-grp'>
    <h4>{item.quantity} X ${item.price}</h4>
    <button type='button' className='remove-btn'>Remove</button>
    </div>
            </div>
        </div>
    )
}

export default Cartitem
