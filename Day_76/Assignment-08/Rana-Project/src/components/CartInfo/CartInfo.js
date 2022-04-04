import React from 'react';
import './CartInfo.css'
const CartInfo = (props) => {
    const {aCart} = props;
    return (
        <div className='cart-item'>
            <h4>{aCart.name}</h4>
            {/* <button>X</button> */}
        </div>
    );
};

export default CartInfo;