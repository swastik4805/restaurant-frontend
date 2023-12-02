const express = require('express');
const fs = require('fs');
const cors=require('cors');

const app = express();
const PORT = 3001; // Change this to your desired port

app.use(cors());
// Read the JSON file synchronously
const jsonData = fs.readFileSync('./db.json', 'utf8');

// Parse the JSON data
const data = JSON.parse(jsonData);

// Endpoint to get restaurant details by name
// app.get('/restaurant/:name', (req, res) => {
//   const restaurantName = req.params.name;
//   const restaurant = data.restaurant.find((r) => r.name === restaurantName);

//   if (restaurant) {
//     res.json(restaurant);
//   } else {
//     res.status(404).json({ error: 'Restaurant not found' });
//   }
// });
app.get('/restaurant/:name', (req, res) => {
    const restaurantName = req.params.name;
    const restaurant = data.restaurant && typeof data.restaurant === 'object'
      ? data.restaurant
      : null;
  
    if (restaurant && restaurant.name === restaurantName) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
