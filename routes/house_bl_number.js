const express = require('express');
const router = express.Router();
const houseHandler = require('./handler/house_bl_number');


/* GET users listing. */
router.get('/', houseHandler.getAll);

module.exports = router;
