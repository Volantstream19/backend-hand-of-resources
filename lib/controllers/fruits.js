const { Router } = require('express');
const { Fruit } = require('../models/Fruit.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const allFruits = await Fruit.getAllFruits();
    res.json(allFruits);
  } catch (e) {
    next(e);
  }
});
