import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, selectSingleProduct } from './SingleProductSlice';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectSingleProduct);


  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {product && (
        <>
          <h3>{product.name}</h3>
          <img src={product.imageUrl} alt={product.name} className='van-img'/>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      )}
    </div>
  );
}

export default SingleProduct;
