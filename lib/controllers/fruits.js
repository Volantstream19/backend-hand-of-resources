const { Router } = require('express');
const { Fruit } = require('../models/Fruit.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const allFruits = await Fruit.getAllFruits();
      res.json(allFruits);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleFruit = await Fruit.getFruits(req.params.id);
      res.json(singleFruit);
    } catch (e) {
      next(e);
    }
  });
