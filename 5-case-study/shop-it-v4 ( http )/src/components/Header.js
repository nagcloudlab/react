import React from "react";

function Header({ title }) {
  return (
    <div>
      <hr />
      <div>{title}</div>
      <hr />
    </div>
  );
}

export default Header;
