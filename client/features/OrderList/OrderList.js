import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const loggedInUserId = useSelector(state => state.auth.me.id);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/orders`);
        setOrders(response.data.filter(order => order.userId === loggedInUserId));
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  if (!loggedInUserId) {
    return <h3>No user</h3>;
  }

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.productName} - ${order.productPrice} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
