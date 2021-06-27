

import React from 'react';

function CartView({value:cart}) {

    const renderItemLines=()=>{
        const keys=Object.keys(cart)
        return keys.map((key,idx)=>{
            let itemLine=cart[key];
            let {item,qty}=itemLine;
            return (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{qty}</td>
                    <td>&#8377;{item.price*qty}</td>
                </tr>
            )
        })
    }

    return (
        <div className="card">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <td>SNo</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItemLines()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CartView;