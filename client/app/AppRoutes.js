import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import EditUser from '../features/editUser/EditUser'
import Home from '../features/home/Home';
import AllProducts from '../features/products/allProducts';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
<<<<<<< HEAD
          <Route to="/home" element={<Home />} />
          <Route path="/vans" element={<AllProducts />} />
=======
          <Route path="/home" element={<Home />} />
          <Route path={`/editUser`} element={<EditUser />} />
>>>>>>> 81c1d2c7b09eb27c1fc7fc3554388f3f2a1ce74f
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/me" element={<AuthForm name="me" />} />
          <Route path="/vans" element={<AllProducts />}/>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
