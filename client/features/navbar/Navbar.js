import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const auth = useSelector((state) => state.auth);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="navbar">
      <Link to="/home">
        <h1>Vanity Vans</h1>
      </Link>
      <nav className="right">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            {/* <Link to="/home">Home</Link> */}
            <Link to="/vans">All Vans</Link>
            <Link to={`/users/${auth.me.id}`}>My Profile</Link>
            {isAdmin && <Link to={"/dashboard"}>Admin Dashboard</Link>}
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Link to="/orders">
              <ShoppingCart size={32} />
            </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/vans">All Vans</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;





