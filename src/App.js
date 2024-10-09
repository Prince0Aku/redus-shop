import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Minimalist Shop</h1>       // Prince Aku
      </header>
      <div className="wrapper">
        <div>
          <ProductList />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
