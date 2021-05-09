const express = require('express');
const router = express.Router();
const unpaidHandler = require('./handler/unpaid');


/* GET users listing. */
router.get('/', unpaidHandler.getAll);

module.exports = router;
