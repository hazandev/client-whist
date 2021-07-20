import React, { useState, useEffect } from "react";

export const CartList = ({ productsCart, onPay }) => {
  const [totalPay, setTotalPay] = useState(0);

  useEffect(() => {
    let sumPrice = 0;
    productsCart.forEach((product) => {
      sumPrice += product.price;
    });
    setTotalPay(sumPrice);
  }, [productsCart]);

  return (
    <div className="cart">
      {productsCart.length > 0 && (
        <ul className="cart-list">
          {productsCart.map((product, index) => (
            <li key={index} className="cart-line">
              <h1>{product.title}</h1>
              <h2>{product.price}$</h2>
            </li>
          ))}
          {totalPay > 0 && <p className="total-cart">Total: <span>{totalPay}$</span></p>}
          <button
            className="btn pay-btn"
            onClick={() => {
              onPay(totalPay);
            }}
          >
            Pay
          </button>
        </ul>
      )}
    </div>
  );
};
