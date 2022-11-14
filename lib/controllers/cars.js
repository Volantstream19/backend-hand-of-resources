const { Router } = require('express');
const { Car } = require('../models/Car');

module.exports = Router().get('/', async (req, res) => {
  const allCars = await Car.getAllCars();
  res.json(allCars);
});
