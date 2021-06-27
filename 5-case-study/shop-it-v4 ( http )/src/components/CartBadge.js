

import React from 'react';

function CartBadge({value:cartQty}) {
    return (
        <div>
            <i style={{fontSize:'20px'}} className="fa fa-shopping-cart"></i>&nbsp;
            {cartQty} item(s) in cart
        </div>
    );
}

export default CartBadge;