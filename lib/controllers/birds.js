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
  });
