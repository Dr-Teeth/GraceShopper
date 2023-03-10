import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, selectSingleProduct } from "./SingleProductSlice";
import { useParams } from "react-router-dom";
import { addOrder } from "../dataSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectSingleProduct);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);

  const handleAddToCart = (id, name, price, userId, imageUrl) => {
    if (isLoggedIn) {
      const product = { id, name, price, imageUrl };
      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          product: JSON.stringify(product),
          quantity: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(addOrder(data));
        })
        .catch((error) => console.error(error));
    } else {
      const order = { productName: name, productPrice: price, quantity: 1 };
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, order])
      );
    }
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div className="singleP">
      {product && (
        <>
          <h3>{product.name}</h3>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="productImg"
          />
          <p className="pdesc">{product.description}</p>
          <p className="pprice">${product.price}</p>
          {isLoggedIn && (
            <button
              className="singleAdd"
              onClick={() =>
                handleAddToCart(
                  product.id,
                  product.name,
                  product.price,
                  userId,
                  product.imageUrl
                )
              }
            >
              Add to Cart
            </button>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default SingleProduct;
