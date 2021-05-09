const express = require('express');
const router = express.Router();
const voyage_numberHandler = require('./handler/voyage_number');


/* GET users listing. */
router.get('/', voyage_numberHandler.getAll);

module.exports = router;
