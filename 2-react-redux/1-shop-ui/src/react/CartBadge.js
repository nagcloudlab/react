

import React from 'react';
import {useSelector} from 'react-redux'

function CartBadge({}) {
    const cart=useSelector(state=>state.cart)
    const qty=Object.entries(cart).length;
    return (
        <div>
            <i style={{fontSize:'20px'}} className="fa fa-shopping-cart"></i>&nbsp;
            {qty} item(s) in cart
        </div>
    );
}

export default CartBadge;