import { useState } from "react";

import Header from "./components/Header";
import ItemList from "./components/ItemList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const [cart, setCart] = useState({});

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

  const renderCart = () => {
    return <CartView value={cart} />;
  };

  return (
    <div>
      <div className="container">
        <Header title="shop-IT-v2" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />

        <Router>
          <div>
            <nav>
              <ul class="nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/items">
                    Items
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/items"
                render={() => <ItemList cart={cart} onBuy={addToCart} />}
              />
              <Route path="/cart" render={(props) => renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
