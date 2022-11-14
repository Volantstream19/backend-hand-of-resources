const { Router } = require('express');
const { Car } = require('../models/Car');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const allCars = await Car.getAllCars();
      res.json(allCars);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleCar = await Car.getCar(req.params.id);
      res.json(singleCar);
    } catch (e) {
      next(e);
    }
  });
