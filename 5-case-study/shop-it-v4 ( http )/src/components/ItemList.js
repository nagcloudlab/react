import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";

function ItemList({ cart, onBuy }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/items")
      .then((response) => response.data)
      .then((items) => {
        setItems(items);
      });
  }, []);

  const renderItems = () => {
    return items.map((item) => {
      let itemLine = cart[item.id] || {};
      let { qty = 0 } = itemLine;
      return <Item key={item.id} value={item} lineQty={qty} onBuy={onBuy} />;
    });
  };

  return <div>{renderItems()}</div>;
}

export default ItemList;
