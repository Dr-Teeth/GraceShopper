import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="navbar">
      <Link to="/home"><h1>Vanity Vans</h1></Link>
      <nav className="right">
  {isLoggedIn ? (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={`/users/${auth.me.id}`}>My Profile</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
      {/* The navbar will show these links after you log in */}
      <Link to="/home">Home</Link>
      <Link to={`/editUser`}>Edit User</Link>
      <button type="button" onClick={logoutAndRedirectHome}>
        Logout
      </button>
      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>
  ) : (
    <div>
      {/* The navbar will show these links before you log in */}
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>
  )}
</nav>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
