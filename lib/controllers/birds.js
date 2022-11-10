const { Router } = require('express');
const { Bird } = require('../models/Bird.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const post = await Bird.insert(req.body);
    res.json(post);
  } catch (e) {
    next(e);
  }
});
