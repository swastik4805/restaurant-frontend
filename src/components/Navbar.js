// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect to the restaurant page if the search term is not empty
    if (searchTerm.trim() !== '') {
      navigate(`/restaurant/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <input
            type="text"
            placeholder="Search for a restaurant"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </li>
        {/* Add more navigation links if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
