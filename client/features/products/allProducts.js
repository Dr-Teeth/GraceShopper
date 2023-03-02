import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from './AllProductsSlice';

import { Link, useLocation } from 'react-router-dom';

const AllProducts = () => {
  const location = useLocation()

  const products =
    useSelector((state) => {
      return state.products;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
    if (location.state) {
      setVan(location.state.van)
    }
  }, []);


  return (
    <div>
      <form>
        <label>Filter Vans:</label>
        <select onChange={(event) => setVan(event.target.value)}>
          <option value="All">All</option>
          <option value="Gaming">Gaming</option>
          <option value="Gym">Gym</option>
          <option value="Home">Home</option>
        </select>
      </form>
      <div>
        {products.map((van, idx) => (
          <div className="card" key={idx}>
            <Link to={`/vans/${products.name}`}>
              <img src={van.imageUrl} className="" />
              <h2>{van.name}</h2>
            </Link>
            <h2>
              {'$'}
              {van.price}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
