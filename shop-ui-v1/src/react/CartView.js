import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {buy} from '../redux/actions/cart'

function CartView({}) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderItemLines = () => {
    const keys = Object.keys(cart);
    return keys.map((key, idx) => {
      let itemLine = cart[key];
      let { item, qty } = itemLine;
      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{item.name}</td>
          <td>&#8377;{item.price}</td>
          <td><i onClick={e=>dispatch(buy(item,-1))} style={{cursor:'pointer'}} className="fa fa-minus"></i></td>
          <td>{qty}</td>
          <td><i onClick={e=>dispatch(buy(item))} style={{cursor:'pointer'}} className="fa fa-plus"></i></td>
          <td>&#8377;{item.price * qty}</td>
        </tr>
      );
    });
  };

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
              <td></td>
              <td>Qty</td>
              <td></td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>{renderItemLines()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CartView;
