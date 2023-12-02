// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/restaurant/:name" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
