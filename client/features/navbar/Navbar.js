import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import "./navbar.css";
import { Button, Modal } from "react-bootstrap";
import Cart from "../cart/Cart";
import { getTotalQuantity } from "../Quantity";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const firstN = useSelector((state) => state.auth.me.firstN);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const auth = useSelector((state) => state.auth);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/home">
        <h1>Vanity Vans</h1>
      </Link>
      <nav className="right">
        {isLoggedIn ? (
          <div>
            <Link to="/vans">All Vans</Link>
            <Link to={`/users/${auth.me.id}`}>My Profile</Link>
            {isAdmin && <Link to={"/dashboard"}>Admin Dashboard</Link>}
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Button onClick={handleShow}>
              Cart 0 Items
            </Button>
            <Modal show={show} onHide={handleClose} className="cart">
              <Modal.Header closeButton>
                <Modal.Title>{firstN}'s Orders</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Cart />
              </Modal.Body>
            </Modal>
          </div>
        ) : (
          <div>
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