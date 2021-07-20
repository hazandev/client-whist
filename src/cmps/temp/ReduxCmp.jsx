import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { Link } from "react-router-dom";

export const Temp = () => {
  const [obj, setObj] = useState([]);
  const dispatch = useDispatch();
  //   dispatch(loadProduct());
  //   const loadProducts = useSelector((state) => state.productModule.products);

  useEffect(() => {
    return () => {
      console.log("unmounted admin");
    };
  }, []);

  return (
    <div className="temp">
      <h1>temp Page</h1>
    </div>
  );
};
