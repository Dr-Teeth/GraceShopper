import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from './AllProductsSlice';

import { Link, useLocation } from 'react-router-dom';

const AllProducts = () => {
  const location = useLocation()
  const [van, setVan] = useState('All')
  const [color, setColor] = useState('All')

  const products =
    useSelector((state) => {
      return state.products;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
    if (location.state) {
      setVan(location.state.brand)
    }
  }, []);


  return (
    <div className="divBelowNavbar">
      <form>
        <label>Filter Vans:</label>
        <select onChange={(event) => setVan(event.target.value)}>
          <option value="All">All</option>
          <option value="Gaming">Gaming</option>
          <option value="Gym">Gym</option>
          <option value="Home">Home</option>
        </select>
      </form>
      <form>
        <label>Filter Color:</label>
        <select onChange={(event) => setColor(event.target.value)}>
          <option value="All">All</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </form>
    </div>
  );
};

export default AllProducts;