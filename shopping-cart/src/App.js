import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import AddNewProductForm from "./Components/AddNewProductForm";

const App = () => {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  const addToProducts = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <div className="App">
      <h1 class="bg-secondary white-text p-5">Shopping Time</h1>
      <AddNewProductForm addToProducts={addToProducts} />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart} />
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
