import React, { useState, useEffect } from "react";
import { cartService } from "../services/cartService";
import { stateService } from "../services/stateService";

export const State = () => {
  const [carts, setCarts] = useState([]);
  const [states, setStates] = useState(null);

  const loadCarts = async () => {
    const cartsQuery = await cartService.query();
    setCarts(cartsQuery);
  };

  useEffect(() => {
    loadCarts();
  }, []);

  useEffect(() => {
    if (carts.length > 0) {
      setStates(stateService.calcState(carts));
    }
  }, [carts]);

  return (
    <div className="state-page">
      {states && (
        <div className="states-display">
          <div className="modal-state">
            <h1>Top 5 Sold Product</h1>
            <ul className="clean-list">
              {states[0].map((product, index) => (
                <li key={index}>
                  {product[0]} - {product[1]}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-state">
            <h1>Top 5 Unique Sold Product</h1>

            <ul className="clean-list">
              {Object.keys(states[1]).map((key, index) => (
                <li key={index}>
                  {key} - {states[1][key]}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-state">
            <h1>Sale Last 5 Days</h1>
            <ul className="clean-list">
              {states[2].map((date, index) => (
                <li key={index}>
                  Date: {date[0]} total sale: {date[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
