const express = require('express');
const router = express.Router();
const project = require('../data.json').projects;
const camaras = require('../models/camaras');

// rendering index.pug with the data
router.get('/', (req, res) => {
  const indexTemplateData = { project }
  res.render('index', indexTemplateData);
});

module.exports = router;
