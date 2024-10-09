import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { minusToCart, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleMinusFromCart = (id) => {
    dispatch(minusToCart(id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
            <div className="flex" >
              <button onClick={() => handleMinusFromCart(item.id)}>
                Minus
              </button>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
