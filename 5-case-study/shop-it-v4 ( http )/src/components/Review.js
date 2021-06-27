import React from "react";

const Review = ({ value: review }) => {
  return (
    <div className="alert alert-danger">
      <span>{review.stars}</span> &mdash; <span>{review.author}</span>
      <hr />
      <div>{review.body}</div>
    </div>
  );
};

export default Review;
