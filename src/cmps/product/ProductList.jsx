import React from "react";
import { ProductPreview } from "./ProductPreview";


const _ProductList = ({ products, onDeleteProduct, onEditProduct, onBuyProduct }) => {
  return (
    <div className="product-list flex wrap">
      {products.map((product, index) => (
        <ProductPreview
          key={index}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
          onBuyProduct={onBuyProduct}
        />
      ))}
    </div>
  );
};

export const ProductList = React.memo(_ProductList);
