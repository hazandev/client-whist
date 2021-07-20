import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProduct } from "../cmps/product/EditProduct";
import { ProductList } from "../cmps/product/ProductList";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";



// import { Link } from "react-router-dom"
import { loadProducts, removeProduct } from "../store/actions/productActions";

export const Admin = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productModule.products);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    console.log("mount");
    dispatch(loadProducts());
    return () => {
      console.log("unmounted admin");
    };
  }, []);

  const onDeleteProduct = useCallback((productId) => {
    dispatch(removeProduct(productId));
  }, []);

  const onEditProduct = useCallback((productId) => {
    setToggleEdit(true);
    setSelectedProduct(`${productId}`);
  }, []);

  const onAddProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="admin">
      {products.length > 0 && (
        <ProductList
          products={products}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
        />
      )}

      <div className="add-product flex column">
        <button
          onClick={() => {
            onAddProduct();
            setToggleEdit((prevToggleEdit) => !prevToggleEdit);
          }}
        className="btn-reset right-self">
          {!toggleEdit ? (
            <IoMdAddCircleOutline className="add-btn hover-span" />
          ) : (
            <CgCloseR className="close-btn hover-span"/>
          )}
        </button>
        {toggleEdit && <EditProduct productId={selectedProduct} />}
      </div>
    </div>
  );
};
