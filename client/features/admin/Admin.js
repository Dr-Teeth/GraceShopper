import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectAllProducts, fetchProductsAsync, deleteProductAsync } from '../products/AllProductsSlice';
import { allUsers, fetchAllUsers, deleteUserAsync } from './adminSlice';

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
  };
  if (status === 'failed') {
    return <div>{error}</div>;
  };
  if (products.length === 0) {
    return <div>No products found</div>;
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAsync(id));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUserAsync(id));
  };
  return (
    <>
    <h1>Hello, {username} Welcome to the Admin Dashboard</h1>
    <h2>View all Products and Users</h2>
    <button><Link to={`/dashboard/addProduct`}>Add a Product?</Link></button>
    <div>
        <h1>All Users</h1>
        {users.map((user, idx) => (
          <div key={idx}>
            <h2>Full Name: {user.firstN} {user.lastN}</h2>
            <h4>Username: {user.username}</h4>
            <h4>Address: {user.address}</h4>
            <h4>Phone: {user.phone}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Admin Status: {user.isAdmin ? 'Admin' : 'Not Admin'}</h4>
            <button><Link to={`/dashboard/editUser/${user.id}`}>Edit User</Link></button>
            <button onClick={() => handleDeleteUser(user.id)}>❌</button>
          </div>
        ))}
        </div>
    <div>
    <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Description: {product.description}</p>
          <button><Link to={`/dashboard/editProduct/${product.id}`}>Edit Product</Link></button>
          <button onClick={() => handleDeleteProduct(product.id)}>❌</button>
        </div>
      ))}
      </div>
    </>
  )
}

export default Admin;

