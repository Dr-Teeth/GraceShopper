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
import { me } from './store';

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
    <div>
      <Routes>
        {isAdmin && <Route path="/dashboard" element={<Admin />} />}
        {isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vans" element={<AllProducts />} />
            <Route path="/vans/:id" element={<SingleProduct />} />
            <Route path={`/users/:id`} element={<SingleUser id={id} />} />
            <Route path={`/editUser/:id`} element={<EditUser id={id} />} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
            <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
            <Route path="/vans" element={<AllProducts />} />
            <Route path="/vans/:id" element={<SingleProduct />} />

          </>
        )}
      </Routes>
    </div>
  );

};

export default AppRoutes;
