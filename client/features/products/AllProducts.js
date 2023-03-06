import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync, selectAllProducts } from './AllProductsSlice';
import { addOrder } from '../dataSlice';
import { Link, useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(selectAllProducts);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);

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

  const handleAddToCart = (id, name, price, userId) => {
    if (isLoggedIn) {
      const product = { id, name, price };
      fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          product: JSON.stringify(product),
          quantity: 1
        })
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(addOrder(data));
        })
        .catch((error) => console.error(error));
    } else {
      const order = { productName: name, productPrice: price, quantity: 1 };
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/vans/${product.id}`}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>Price: ${product.price}</p>
          </Link>
          {isLoggedIn && (
            <button onClick={() => handleAddToCart(product.id, product.name, product.price, userId)}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
