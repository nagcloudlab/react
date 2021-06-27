import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "../redux/actions/items";
import Item from "./Item";

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items || []);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  const renderItems = () => {
    return items.map((item) => {
      return <Item key={item.id} value={item} />;
    });
  };

  return <div>{renderItems()}</div>;
}

export default ItemList;
