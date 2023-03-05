import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const loggedInUserId = useSelector(state => state.auth.me.id);
  const firstN = useSelector((state) => state.auth.me.firstN);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const ordersFromServer = await response.json();
        const localOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders([...ordersFromServer.filter(order => order.userId === loggedInUserId), ...localOrders]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, [loggedInUserId]);

  const handleEmptyCart = () => {
    localStorage.removeItem('orders');
    setOrders([]);
  };

  const cartTitle = loggedInUserId ? `${firstN}'s Orders` : "Guest's cart";

  return (
    <div>
      <h2>{cartTitle}</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.productName} - ${order.productPrice} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
      {orders.length > 0 && (
        <button onClick={handleEmptyCart}>Empty Cart</button>
      )}
    </div>
  );
};

export default OrderList;
