import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const loggedInUserId = useSelector((state) => state.auth.me.id);
  const firstN = useSelector((state) => state.auth.me.firstN);

  useEffect(() => {
    fetchOrders(loggedInUserId);
  }, [loggedInUserId]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`/api/orders/${loggedInUserId}`);
      console.log(response)
      const ordersFromServer = await response.json();
      const localOrders = JSON.parse(localStorage.getItem('orders')) || [];
      const allOrders = [...ordersFromServer, ...localOrders];
      const uniqueOrders = allOrders.reduce((accumulator, current) => {
        const existingOrder = accumulator.find(
          (order) => order.productName === current.productName
        );
        if (existingOrder) {
          existingOrder.quantity += current.quantity;
        } else {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      setOrders(uniqueOrders);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncrementQuantity = async (orderId) => {
    try {
      const order = orders.find((order) => order.id === orderId);
      if (!order) {
        return;
      }
      const response = await fetch(`/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: loggedInUserId,
          product: JSON.stringify({ name: order.productName, price: order.productPrice }),
          quantity: 1,
        }),
      });
      fetchOrders();
      const newOrder = await response.json();
      const newOrders = [...orders, newOrder];
      setOrders(newOrders);
    } catch (error) {
      console.error(error);
    }
  };


  const handleDelete = async (orderId) => {
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      });
      const newOrders = orders.filter((order) => order.id !== orderId);
      setOrders(newOrders);
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckout = async () => {
    try {
      await fetch(`/api/orders/checkout/${loggedInUserId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orders),
      });
      localStorage.removeItem('orders');
      setOrders([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmptyCart = () => {
    localStorage.removeItem('orders');
    setOrders([]);
  };

  useEffect(() => {
    let total = 0;
    orders.forEach((order) => {
      total += order.quantity * order.productPrice;
    });
    setTotalPrice(total);
  }, [orders]);

  const cartTitle = loggedInUserId ? `${firstN}'s Orders` : "Guest's cart";

  return (
    <div>
      <h2>{cartTitle}</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <span>
              {order.productName} - ${order.productPrice} - Quantity: {order.quantity}
            </span>
            <button onClick={() => handleDelete(order.id)}>-</button>
            <button onClick={() => handleIncrementQuantity(order.id)}>+</button>
          </li>
        ))}
      </ul>
      {orders.length > 0 && (
        <>
          <div>Total Price: ${totalPrice}</div>
          <button onClick={handleEmptyCart}>Empty Cart</button>
          {loggedInUserId && (
            <>
              {/* <button onClick={handleCheckout}>Checkout</button> */}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default OrderList;
