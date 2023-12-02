// src/components/RestaurantDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { name } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/restaurant/${name}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurant details:', error);
      });
  }, [name]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <h2>{restaurant.name}</h2>
    <p>Location: {restaurant.location.address}</p>

    <h3>Chef Details</h3>
    <p>Chef: {restaurant.chef.name}</p>
    <p>Bio: {restaurant.chef.bio}</p>
    <p>Signature Dish: {restaurant.chef.signature_dish}</p>

    <h3>Awards</h3>
    <ul>
      {restaurant.awards.map((award, index) => (
        <li key={index}>{award.year} - {award.organization}: {award.award}</li>
      ))}
    </ul>

    <h3>Ambiance</h3>
    <p>{restaurant.ambiance.description}</p>

    <h3>Online Presence</h3>
    <p>Website: <a href={restaurant.online_presence.website} target="_blank" rel="noopener noreferrer">{restaurant.online_presence.website}</a></p>
    <p>Facebook: <a href={restaurant.online_presence.social_media.facebook} target="_blank" rel="noopener noreferrer">{restaurant.online_presence.social_media.facebook}</a></p>
    <p>Instagram: <a href={restaurant.online_presence.social_media.instagram} target="_blank" rel="noopener noreferrer">{restaurant.online_presence.social_media.instagram}</a></p>
    <p>Twitter: <a href={restaurant.online_presence.social_media.twitter} target="_blank" rel="noopener noreferrer">{restaurant.online_presence.social_media.twitter}</a></p>

    {/* Add more details based on your requirements */}
  </div>
  );
};

export default RestaurantDetails;
