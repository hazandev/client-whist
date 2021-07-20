import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductList } from "../cmps/product/ProductList";
import { CartList } from "../cmps/CartList";
// import { Link } from "react-router-dom"
import { loadProducts } from "../store/actions/productActions";
import { cartService } from "../services/cartService";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productModule.products);
  const [toggleCart, setToggleCart] = useState(false);
  const [productsCart, setProductsCart] = useState([]);
  const [uniqeProduct, setUniqeProduct] = useState([]);

  useEffect(() => {
    console.log("mount");
    dispatch(loadProducts());
    return () => {
      console.log("unmounted home");
    };
  }, []);

  const onBuyProduct = (product) => {
    setProductsCart((prevProductsCart) => [...prevProductsCart, product]);
    if (!uniqeProduct.includes(product.title)) {
      setUniqeProduct((prevUniqeProduct) => [
        ...prevUniqeProduct,
        product.title,
      ]);
    }
  };

  const onPay = (totalPay) => {
    const payCart = {
      date: Date.now(),
      productsCart: productsCart,
      uniqeProduct: uniqeProduct,
      totalPrice: totalPay,
    };
    setProductsCart([]);
    cartService.payCart(payCart);
  };

  return (
    <div className="home">
      {products && (
        <ProductList products={products} onBuyProduct={onBuyProduct} />
      )}
      <div className="cart-side">
        <div
          className="btn cart-btn hover-span flex"
          onClick={() => {
            setToggleCart((prevToggleCart) => !prevToggleCart);
          }}
        >
          {productsCart.length > 0 && (
            <span className="count-product">{productsCart.length}</span>
          )}
          <AiOutlineShoppingCart />
        </div>
        {toggleCart && productsCart.length > 0 && (
          <CartList productsCart={productsCart} onPay={onPay} />
        )}
      </div>
    </div>
  );
};
