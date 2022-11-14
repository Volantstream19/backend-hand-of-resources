const { Router } = require('express');
const Dog = require('../models/Dog.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const allDogs = await Dog.getAllDogs();
      res.json(allDogs);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleDog = await Dog.getDog(req.params.id);
      res.json(singleDog);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const post = await Dog.insert(req.body);
      res.json(post);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const put = await Dog.updateDogId(req.params.id, req.body);
      res.json(put);
    } catch (e) {
      next(e);
    }
  });
