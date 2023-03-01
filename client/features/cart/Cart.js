// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem } from './cartSlice';

// const Cart = () => {
//   const isLoggedIn = useSelector((state) => !!state.auth.me.id);
//   const username = useSelector((state) => state.auth.me.username);
//   const cartItems = useSelector((state) => state.cart.items);
//   const total = useSelector((state) => state.cart.total);
//   const dispatch = useDispatch();

//   const handleRemoveItem = (id, price) => {
//     dispatch(removeItem({ id, price }));
//   };

//   return (
//     <div>
//       <h3>{isLoggedIn ? `${username}'s cart` : 'Guest cart'}</h3>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.name} />
//             <h4>{item.name}</h4>
//             <p>{item.price}</p>
//             <p>Qty: {item.quantity}</p>
//             <button onClick={() => handleRemoveItem(item.id, item.price)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: {total}</p>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';

const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch(); 

  const handleRemoveItem = (id, price) => {
    dispatch(removeItem({ id, price }));
  };

  const initialCartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2, image: 'https://placehold.it/100x100' },
    { id: 2, name: 'Product 2', price: 20, quantity: 1, image: 'https://placehold.it/100x100' },
    { id: 3, name: 'Product 3', price: 15, quantity: 3, image: 'https://placehold.it/100x100' },
  ];

  return (
    <div>
      <h3>{isLoggedIn ? `${username}'s cart` : 'Guest cart'}</h3>
      <ul>
        {initialCartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => handleRemoveItem(item.id, item.price)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${initialCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      <div>
        <button>Checkout</button>
    </div>
    </div>
  );
};

export default Cart;
