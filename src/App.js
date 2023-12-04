// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import ImageSlider from './ImageSlider';


function App() {
  return (
    <Router>
      <Navbar />
      {/* <br></br> */}
      <divn>
      <ImageSlider/>
      </divn>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/restaurant/:name" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
