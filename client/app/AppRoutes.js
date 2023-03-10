import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import SingleUser from '../features/userPage/SingleUser';
import { fetchSingleUser } from '../features/userPage/userPageSlice';
import EditUser from '../features/editUser/EditUser';
import Home from '../features/home/Home';
import AllProducts from '../features/products/AllProducts';
import SingleProduct from '../features/products/SingleProduct';
import Admin from '../features/admin/Admin'
import EditProductAdmin from '../features/admin/EditProductAdmin';
import EditUserAdmin from '../features/admin/EditUserAdmin';
import AddProductAdmin from '../features/admin/AddProductAdmin'
import { me } from './store';
import OrderList from '../features/OrderList/OrderList';
import OrderHistory from '../features/checkout/orderHistory';
import Checkout from '../features/checkout/checkout';
import ThankYou from '../features/checkout/thankyou'

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(me());
    if (id) {
      dispatch(fetchSingleUser(id));
    }
  }, [dispatch, id]);

  return (
    <Routes>
      {isAdmin && <Route path="/dashboard" element={<Admin />} />}
      {isAdmin && <Route path="/dashboard/editUser/:id" element={<EditUserAdmin />} />}
      {isAdmin && <Route path="/dashboard/editProduct/:id" element={<EditProductAdmin />} />}
      {isAdmin && <Route path="/dashboard/addProduct" element={<AddProductAdmin />} />}
      {isLoggedIn && (
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vans" element={<AllProducts />} />
          <Route path="/vans/:id" element={<SingleProduct />} />
          <Route path={`/users/:id`} element={<SingleUser id={id} />} />
          <Route path={`/editUser/:id`} element={<EditUser id={id} />} />
          <Route path="/orders" element={<OrderList userId={id} />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
          <Route path='/api/stripe/checkout' element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </>
      )}
      {!isLoggedIn && (
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
          <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
          <Route path="/vans" element={<AllProducts />} />
          <Route path="/vans/:id" element={<SingleProduct />} />
          <Route path="/orders" element={<OrderList userId={id} />} />
          <Route path='/api/stripe/checkout' element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </>
      )}
    </Routes>
  );

};

export default AppRoutes;
