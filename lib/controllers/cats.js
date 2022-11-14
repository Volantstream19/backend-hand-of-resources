const { Router } = require('express');
const { Cat } = require('../models/Cat.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const allCars = await Cat.getAllCats();
      res.json(allCars);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleCat = await Cat.getCat(req.params.id);
      res.json(singleCat);
    } catch (e) {
      next(e);
    }
  });
