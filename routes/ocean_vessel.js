const express = require('express');
const router = express.Router();
const ocean_vessel = require('./handler/ocean_vessel');


/* GET users listing. */
router.get('/', ocean_vessel.getAll);

module.exports = router;
