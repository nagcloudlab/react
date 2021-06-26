import { useState } from "react";

import Header from "./components/Header";
import Item from "./components/Item";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";

function App() {
  const [items] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 149000.0,
      description: "New Mac Pro",
      isAvailable: true,
      image: "images/Laptop.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 19000.0,
      description: "New Pro",
      isAvailable: true,
      image: "images/Mobile.png",
    },
  ]);

  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (e) => {
    let { item } = e;
    let { id } = item;
    let itemLine = cart[id];
    if (itemLine) {
      itemLine = { ...itemLine, qty: itemLine.qty + 1 };
    } else {
      itemLine = { item, qty: 1 };
    }
    let newCart = { ...cart, [id]: itemLine };
    setCart(newCart);
  };

  const renderItems = () => {
    if (!isCartOpen) {
      return items.map((item) => {
        let itemLine = cart[item.id] || {};
        let { qty = 0 } = itemLine;
        return (
          <Item
            key={item.id}
            value={item}
            lineQty={qty}
            onBuy={(e) => addToCart(e)}
          />
        );
      });
    }
  };

  const renderCart = () => {
    if(isCartOpen)
    return <CartView value={cart} />;
  };

  return (
    <div>
      <div className="container">
        <Header title="shop-IT-v2" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <nav>
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={(e) => setIsCartOpen(!isCartOpen)}
                href="#"
              >
                {isCartOpen ? "Items" : "Cart"}
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {renderCart()}
        {renderItems()}
      </div>
    </div>
  );
}

export default App;
