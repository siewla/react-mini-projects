import React from "react";

const AllTheThings = ({ products, handleClick }) => {
  const things = products.map((d, i) => {
    return (
      <li key={i} onClick={() => handleClick(d)}>
        {d.name} - ${d.price}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{things}</ul>
    </div>
  );
};

export default AllTheThings;
