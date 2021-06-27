import React, { useState, useRef } from "react";

function ReviewForm({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  const starsRef = useRef(null);
  const authorRef = useRef(null);
  const bodyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      stars: starsRef.current.value,
      author: authorRef.current.value,
      body: bodyRef.current.value,
    };

    if (onSubmit) onSubmit(review);
    starsRef.current.value = 1;
    authorRef.current.value = "";
    bodyRef.current.value = "";
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button onClick={(e) => setIsOpen(true)}>
        <i class="fa fa-plus"></i>
      </button>
    );
  } else {
    return (
      <div className="card">
        <div className="card-header">Review Form</div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label>stars</label>
              <select ref={starsRef} className="form-control">
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>author</label>
              <input
                ref={authorRef}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>body</label>
              <textarea ref={bodyRef} className="form-control"></textarea>
            </div>
            <button className="btn btn-dark">submit</button>
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
