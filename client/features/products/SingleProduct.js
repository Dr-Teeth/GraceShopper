import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, editProductAsync, selectSingleProduct } from './SingleProductSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectSingleProduct);

  return (
    <div className="divBelowNavbar">
      <div className="row ">
        <div className="column single-shoe">
          <img src={imageUrl} />
        </div>
        <div className="column">
          <div className="row">
            {' '}
            <h1>{Name}</h1>{' '}
          </div>

          <div className="row">
            {' '}
            <h3>{brand}</h3>
          </div>
          <div className="row">
            <h3>
              {'$'}
              {price}
            </h3>
          </div>
          <div className="row">
            <h5>Select size</h5>
          </div>
          <div className="row">
            {SingleProduct.map((element) => (
              <button
                key={element.id}
                className="shoe-sizes"
                onClick={() => {
                  setId(`${element.id}`);
                }}
              >
                <div className="single-shoe-size">{element.size}</div>
              </button>
            ))}
          </div>
          <div className="row">
            <button
              className="button-50"
              onClick={() => {
                if (itemId !== Infinity) {
                  dispatch(findOrMakeCart(itemId, userId, UUID));
                  setId(Infinity);
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStyle;