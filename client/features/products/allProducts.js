import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync, selectAllProducts } from './AllProductsSlice';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product, index) => (
  <div key={index}>
    <h2>{product.name}</h2>
    <img src={product.imgUrl} />
    <p>Price: ${product.price}</p>
  </div>
))}
    </div>
  );
};

export default AllProducts;
