const express = require('express');
const router = express.Router();
const consigneeHandler = require('./handler/consignee');

/* GET users listing. */
router.get('/', consigneeHandler.getAll);
router.get('/:id', consigneeHandler.get);
router.post('/', consigneeHandler.create);
router.put('/:id', consigneeHandler.update);
router.delete('/:id', consigneeHandler.destroy);

module.exports = router;
