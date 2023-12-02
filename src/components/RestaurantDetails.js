// src/components/RestaurantDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './RestaurantDetails.module.css';

const RestaurantDetails = () => {
  const { name } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  const handleAddressClick = () => {
    // Open Google Maps in a new tab with the restaurant's location
    if (restaurant && restaurant.location) {
      const { latitude, longitude, address } = restaurant.location;
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(mapsUrl, '_blank');
    }
  };

  const handleWebsite=()=>{
    window.open(restaurant.online_presence.social_media.website,'_blank');
  }
  const handleFacebook=()=>{
    window.open(restaurant.online_presence.social_media.facebook,'_blank');
  }
  const handleInstagram=()=>{
    window.open(restaurant.online_presence.social_media.instagram,'_blank');
  }
  const handleTwitter=()=>{
    window.open(restaurant.online_presence.social_media.twitter,'_blank');
  }


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
    <div className={styles.container}>
    <h2 className={styles.heading}>{restaurant.name}</h2>
      <p><strong>Location:</strong> {restaurant.location.address}</p>
      <button onClick={handleAddressClick}>checkout location</button>

      <h3 className={styles.subHeading}>Chef Details</h3>
      <p><strong>Chef:</strong> {restaurant.chef.name}</p>
      <p><strong>Bio:</strong> {restaurant.chef.bio}</p>
      <p><strong>Signature Dish:</strong> {restaurant.chef.signature_dish}</p>

    <h3>Awards</h3>
    <ul>
      {restaurant.awards.map((award, index) => (
        <li key={index}>{award.year} - {award.organization}: {award.award}</li>
      ))}
    </ul>

    <h3>Ambiance</h3>
    <p>{restaurant.ambiance.description}</p>

    <h3>Online Presence</h3>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleWebsite}>website</button>
        <button onClick={handleFacebook}>Facebook</button>
        <button onClick={handleInstagram}>Instagram</button>
        <button onClick={handleTwitter}>Twitter</button>
    </div>

    {/* Add more details based on your requirements */}
  </div>
  );
};

export default RestaurantDetails;
