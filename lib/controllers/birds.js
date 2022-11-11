const { Router } = require('express');
const { Bird } = require('../models/Bird.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const singleBird = await Bird.getBird(req.params.id);
    res.json(singleBird);
  })

  .get('/', async (req, res) => {
    const allBirds = await Bird.getAll();
    res.json(allBirds);
  })

  .post('/', async (req, res) => {
    const post = await Bird.insert(req.body);
    res.json(post);
  })

  .put('/:id', async (req, res) => {
    const put = await Bird.updateById(req.params.id, req.body);
    res.json(put);
  });
