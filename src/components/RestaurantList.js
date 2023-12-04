// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/restaurant')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurant data:', error);
      });
  }, []);

  return (
    <div>
      <ImageSlider/>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <h2>Welcome to the Website</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.name}>
              <Link to={`/restaurant/${restaurant.name}`}>
                {restaurant.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantList;
