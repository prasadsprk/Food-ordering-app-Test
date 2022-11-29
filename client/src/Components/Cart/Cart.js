import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((product) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={product.image} alt="" />
            <p>{product.hotel}</p>
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.amount}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>{product.price}</span>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;