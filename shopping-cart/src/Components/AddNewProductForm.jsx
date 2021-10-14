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
    <div className="row align-items-center p-2 bg-info">
      <div className="col">
        <input
          onChange={(e) => handleChange(e)}
          value={product.name}
          type="text"
          name="name"
          placeholder="product name"
          className="form-control"
        />
      </div>
      <div className="col-auto">
        <input
          onChange={(e) => handleChange(e)}
          value={product.price}
          type="number"
          step="0.01"
          name="price"
          placeholder="price"
          className="form-control"
        />
      </div>
      <div className="col-auto">
        <input
          onChange={(e) => handleChange(e)}
          value={product.description}
          type="text"
          name="description"
          placeholder="description"
          className="form-control"
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-dark" onClick={() => handleSubmit()}>
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default AddNewProductForm;
