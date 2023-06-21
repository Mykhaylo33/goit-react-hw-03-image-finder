import React from "react";
import './Button.css'

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="load-more__button">
      Load more
    </button>
  );
}

export default Button;
