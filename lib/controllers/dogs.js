const { Router } = require('express');
const Dog = require('../models/Dog.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const allDogs = await Dog.getAllDogs();
    res.json(allDogs);
  } catch (e) {
    next(e);
  }
});
