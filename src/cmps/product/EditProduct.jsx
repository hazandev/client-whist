import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productService } from "../../services/productService";
import { useForm } from "../../services/generalService/customHooks";
import { saveProduct } from "../../store/actions/productActions";

// import { Link } from "react-router-dom"

export const EditProduct = ({ productId = null }) => {
  const [product, handleChange, setProduct] = useForm(
    productService.getEmptyProduct()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) loadProduct(productId);
    return () => {
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    loadProduct(productId);
    return () => {
      console.log("unmounted");
    };
  }, [productId]);

  const loadProduct = async (productId ) => {
    if (productId) {
      const _product = await productService.getById(productId);
      setProduct(_product);
    }
  };

  const onAddProduct = async (ev) => {
    ev.preventDefault();
    dispatch(saveProduct(product));
  };

  return (
    <div className="edit-product">
      <form
        className="form-product flex column space-between"
        onSubmit={(ev) => onAddProduct(ev)}
      >
        <div className="field-input">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="field-input">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="field-input">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="field-input">
          <input
            type="text"
            name="img"
            placeholder="Image"
            value={product.img}
            onChange={handleChange}
          />
        </div>
        <button className="btn save-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
