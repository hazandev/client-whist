import React from "react";
import { useLocation} from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";


// import { Link } from "react-router-dom"

export function ProductPreview(props) {
  const location = useLocation();
  const { _id, title, img, price } = props.product;
  const pathname= location.pathname.slice(1);
  return (
    <div className="product-preview">
      <div className="card-product flex column justify-center align-center">
        <img src={img} />
        <h1>{title}</h1>
        <h2>{price}$</h2>
      </div>
      
      {pathname === "admin" && (
        <div className="action-card flex space-evenly">
          <FiEdit
            className="edit-btn"
            onClick={() => {
              props.onEditProduct(_id);
            }}
          />
          
          <RiDeleteBinLine
            className="delete-btn"
            onClick={() => {
              props.onDeleteProduct(_id);
            }}
          />
        </div>
      )}
            {pathname === "home" && (
        <div className="action-card flex justify-center">
        <button
          className="btn buy-btn"
          onClick={() => {
            props.onBuyProduct(props.product);
          }}
        >
          Add To Cart
        </button>
        </div>
      )}
    </div>
  );
}
