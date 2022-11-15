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
  })

  .post('/', async (req, res, next) => {
    try {
      const resp = await Fruit.insert(req.body);
      res.json(resp);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const put = await Fruit.updateFruitId(req.params.id, req.body);
      res.json(put);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const del = await Fruit.delete(req.params.id);
      res.json(del);
    } catch (e) {
      next(e);
    }
  });
