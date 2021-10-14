import React from "react";

const MyShoppingCart = ({ cart, handleClick }) => {
  const things = cart.map((d, i) => {
    return (
      <li key={i} onClick={() => handleClick(i)}>
        {d.name} {d.price}
      </li>
    );
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{things}</ul>
    </div>
  );
};

export default MyShoppingCart;
