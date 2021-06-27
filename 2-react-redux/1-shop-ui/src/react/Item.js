import React, { useState } from "react";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { buy } from "../redux/actions/cart";

function Item({ value: item }) {
  const [currentTab, setCurrentTab] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  };

  const renderBuyBtn = (item) => {
    if (item.canBuy)
      return (
        <button
          onClick={(e) => dispatch(buy(item))}
          className="btn btn-sm btn-dark"
        >
          buy
        </button>
      );
    else return null;
  };

  const renderTabPanel = (item) => {
    switch (currentTab) {
      case 1:
        return <div>{item.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return <div>None Yet</div>;
      default:
        return null;
    }
  };

  const cartLine = cart[item.id] || {};
  const lineQty = cartLine.qty || 0;

  return (
    <section className="list-group-item">
      <div className="row">
        <div className="col-3">
          <img src={item.imagePath} className="img-fluid" alt={item.name} />
        </div>
        <div className="col-9">
          <div>{item.name}</div>
          <div>&#8377;{item.price}</div>
          {renderBuyBtn(item)} &nbsp;{" "}
          <span className="badge bg-warning">{lineQty}</span>
          <br />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={currentTab === 1 ? "nav-link active" : "nav-link"}
                onClick={(e) => handleTabChange(e, 1)}
                href="/"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classNames("nav-link", { active: currentTab === 2 })}
                onClick={(e) => handleTabChange(e, 2)}
                href="/"
              >
                Specification
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classNames("nav-link", { active: currentTab === 3 })}
                onClick={(e) => handleTabChange(e, 3)}
                href="/"
              >
                Reviews
              </a>
            </li>
          </ul>
          {renderTabPanel(item)}
        </div>
      </div>
    </section>
  );
}

export default Item;
