import { useState } from "react";
import classNames from 'classnames'

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

  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  };

  const renderBuyBtn = (item) => {
    if (item.isAvailable)
      return <button className="btn btn-sm btn-dark">buy</button>;
    else return null;
  };

  const rendetTabPanel = (item) => {
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

  const renderItems = () => {
    return items.map((item) => {
      return (
        <section key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-3">
              <img src={item.image} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9">
              <div>{item.name}</div>
              <div>&#8377;{item.price}</div>
              {renderBuyBtn(item)}
              <br />

              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={currentTab===1?'nav-link active':'nav-link'}
                    onClick={(e) => handleTabChange(e, 1)}
                    href="/"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames('nav-link',{active:currentTab===2})}
                    onClick={(e) => handleTabChange(e, 2)}
                    href="/"
                  >
                    Specification
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames('nav-link',{active:currentTab===3})}
                    onClick={(e) => handleTabChange(e, 3)}
                    href="/"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              {rendetTabPanel(item)}
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <hr />
        <div>shop-IT-v1</div>
        <hr />
        {renderItems()}
      </div>
    </div>
  );
}

export default App;
