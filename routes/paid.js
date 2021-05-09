const express = require('express');
const router = express.Router();
const paidHandler = require('./handler/paid');


/* GET users listing. */
router.get('/', paidHandler.getAll);

module.exports = router;
