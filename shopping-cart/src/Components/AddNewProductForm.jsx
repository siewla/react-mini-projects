import React, { useState } from "react";

const AddNewProductForm = ({ addToProducts }) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const handleSubmit = () => {
    addToProducts(product);
    setProduct({ name: "", price: "", description: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <input
        onChange={(e) => handleChange(e)}
        value={product.name}
        type="text"
        name="name"
        placeholder="product name"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={product.price}
        type="text"
        name="price"
        placeholder="price"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={product.description}
        type="text"
        name="description"
        placeholder="description"
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default AddNewProductForm;
