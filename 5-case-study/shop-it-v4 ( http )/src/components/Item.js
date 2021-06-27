import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ReviewForm from "./ReviewForm_v2";

import axios from "axios";

import Review from "./Review";

function Item({ value: item, onBuy, lineQty }) {
  const [currentTab, setCurrentTab] = useState(1);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (currentTab === 3) {
      axios
        .get(`http://localhost:8080/api/items/${item.id}/reviews`)
        .then((response) => response.data)
        .then((reviews) => {
          setReviews(reviews);
        });
    }
  }, [currentTab]);

  const handleNewReview = (review) => {
    axios
      .post(`http://localhost:8080/api/items/${item.id}/reviews`, review)
      .then((response) => response.data)
      .then((savedReview) => {
        setReviews([savedReview, ...reviews]);
      });
  };

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  };

  const renderBuyBtn = (item) => {
    if (item.canBuy)
      return (
        <button
          onClick={(e) => onBuy({ item })}
          className="btn btn-sm btn-dark"
        >
          buy
        </button>
      );
    else return null;
  };

  const renderReviews = () => {
    return reviews.map((review, index) => {
      return <Review key={index} value={review} />;
    });
  };

  const renderTabPanel = (item) => {
    switch (currentTab) {
      case 1:
        return <div>{item.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return (
          <div>
            {renderReviews()}
            <ReviewForm onSubmit={(review) => handleNewReview(review)} />
          </div>
        );
      default:
        return null;
    }
  };

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
