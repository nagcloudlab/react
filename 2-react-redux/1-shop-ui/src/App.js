import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CartBadge from "./react/CartBadge";
import CartView from "./react/CartView";
import Header from "./react/Header";
import Home from "./react/Home";
import ItemList from "./react/ItemList";
import NotFound from "./react/NotFound";

import {useSelector} from 'react-redux'

function App() {

  const nwStatus=useSelector(state=>state.nwStatus)

  return (
    <div className="container">
      <Header title="shop-IT-ui" />
      <hr/>
      <CartBadge/>
      <hr/>
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          {nwStatus.message?<div className="alert alert-warning">{nwStatus.message}</div>:''}
          <hr/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" component={ItemList} />
            <Route path="/cart" component={CartView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
