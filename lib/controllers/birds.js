const { Router } = require('express');
const { Bird } = require('../models/Bird.js');

module.exports = Router()
  .post('/', async (req, res) => {
    const post = await Bird.insert(req.body);
    res.json(post);
  })

  .get('/', async (req, res) => {
    const allBirds = await Bird.getAll();
    res.json(allBirds);
  });
