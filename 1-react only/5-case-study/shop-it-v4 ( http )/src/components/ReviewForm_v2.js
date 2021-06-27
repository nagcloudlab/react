import React, { useState, useRef } from "react";

function ReviewForm({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState({ stars: 5, author: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(review);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    let { id, value } = e.target;
    setReview({ ...review, [id]: value });
  };

  if (!isOpen) {
    return (
      <button onClick={(e) => setIsOpen(true)}>
        <i class="fa fa-plus"></i>
      </button>
    );
  } else {
    let { stars, author, body } = review;

    return (
      <div className="card">
        <div className="card-header">Review Form</div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label>stars</label>
              <select
                id="stars"
                className="form-control"
                value={stars}
                onChange={(e) => handleChange(e)}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
              {stars < 3 ? "expected atleast 3" : ""}
            </div>
            <div className="form-group">
              <label>author</label>
              <input
                id="author"
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>body</label>
              <textarea
                id="body"
                className="form-control"
                value={body}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <button className="btn btn-dark" disabled={stars < 3}>
              submit
            </button>
            &nbsp;
            <button
              onClick={(e) => setIsOpen(false)}
              type="button"
              className="btn btn-dark"
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
