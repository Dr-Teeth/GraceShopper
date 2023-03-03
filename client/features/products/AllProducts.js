import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync, selectAllProducts } from './AllProductsSlice';
import { addItem } from '../cart/cartSlice';

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

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const handleAddToCart = (id, name, price) => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product.id, product.name, product.price)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
