import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';

const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const cartItems = useSelector((state) => state.auth.me.id ?
  state.auth.me.carts.map((cart) => cart.products).flat() : state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveItem = (id, price) => {
    dispatch(removeItem({ id, price }));
  };

  return (
    <div>
      <h3>{isLoggedIn ? `${username}'s cart` : 'Guest cart'}</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => handleRemoveItem(item.id, item.price)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
