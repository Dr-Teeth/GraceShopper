import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProductsAsync } from '../products/AllProductsSlice';
import { allUsers, fetchAllUsers } from './adminSlice';

const Admin = () => {
  const username = useSelector((state) => state.auth.me.username);
  const { products, status, error } = useSelector(selectAllProducts);
  const users = useSelector(allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchAllUsers());
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

  return (
    <>
    <h1>Hello, {username} Welcome to the Admin Dashboard</h1>
    <h2>View all Products and Users</h2>
    <div>
    <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imgUrl} alt={product.name} />
          <p>Price: ${product.price}</p>
        </div>
      ))}
      </div>
        <div>
        <h1>All Users</h1>
        {users.map(user => (
          <div key={user.id}>
            <h2>Full Name: {user.firstN}, {user.lastN}</h2>
            <h3>Username: {user.username}</h3>
            <h3>Admin: {user.isAdmin}</h3>
          </div>
        ))}
        </div>
    </>
  )
}

export default Admin;

