import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../slider/Slider';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Slider />
    </div>
  );
};

export default Home;
