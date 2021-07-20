const express = require('express');
const router = express.Router();



// rendering index.pug with the data
router.get('/', async (req, res) => {
  // const indexTemplateData = { project }
  res.render('index');
});

module.exports = router;
