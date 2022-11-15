const { Router } = require('express');
const { Bird } = require('../models/Bird.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const allBirds = await Bird.getAll();
    res.json(allBirds);
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleBird = await Bird.getBird(req.params.id);
      res.json(singleBird);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res) => {
    const post = await Bird.insert(req.body);
    res.json(post);
  })

  .put('/:id', async (req, res, next) => {
    try {
      const put = await Bird.updateById(req.params.id, req.body);
      res.json(put);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const del = await Bird.delete(req.params.id);
      res.json(del);
    } catch (e) {
      next(e);
    }
  });
