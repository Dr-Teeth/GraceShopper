import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../slider/Slider';

const Home = () => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username ? username : "Guest"}</h3>
    </div>
  );
};

export default Home;
