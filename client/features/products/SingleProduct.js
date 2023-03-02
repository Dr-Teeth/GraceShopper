import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleProductSlice, { fetchSingleProduct, editProductAsync } from './SingleProductSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleProduct = (props) => {
  const name = props.match.params.name;

  const [itemId, setId] = useState(Infinity);

  const dispatch = useDispatch();

  const SingleProduct = SingleProductSlice || [];
  const { vanName, description, imageUrl, price } = SingleProduct[0] || [];

  useEffect(() => {
    dispatch(_fetchSingleStyle(name));
  }, []);

  return (
    <div className="divBelowNavbar">
      <div className="row ">
        <div className="column single-product">
          <img src={imageUrl} />
        </div>
        <div className="column">
          <div className="row">
            {' '}
            <h1>{vanName}</h1>{' '}
          </div>

          <div className="row">
            {' '}
            <h3>{description}</h3>
          </div>
          <div className="row">
            <h3>
              {'$'}
              {price}.00
            </h3>
          </div>
          <div className="row">
            <h5>Select size</h5>
          </div>
          <div className="row">
            {SingleProduct.map((element) => (
              <button
                key={element.id}
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

export default SingleProduct;