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
  })
  .post('/', async (req, res, next) => {
    try {
      const post = await Car.insert(req.body);
      res.json(post);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const put = await Car.updateCarId(req.params.id, req.body);
      res.json(put);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const del = await Car.delete(req.params.id);
      res.json(del);
    } catch (e) {
      next(e);
    }
  });
