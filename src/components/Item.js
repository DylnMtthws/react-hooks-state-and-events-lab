import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const toggleCartClass = () => {
    setIsInCart(!isInCart)
  }

  const cartClass = isInCart ? "in-cart" : ""
  const cartStatus = isInCart ? "Remove From Cart" : "Add to Cart"
  const buttonClass = isInCart ? "remove" : "add"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleCartClass}>{cartStatus}</button>
    </li>
  );
}

export default Item;
