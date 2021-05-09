const express = require('express');
const router = express.Router();
const consignee_nameHandler = require('./handler/consignee_name');


/* GET users listing. */
router.get('/', consignee_nameHandler.getAll);

module.exports = router;
