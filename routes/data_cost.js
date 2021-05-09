const express = require('express');
const router = express.Router();
const dataCostHandler = require('./handler/data-cost');

/* GET users listing. */
router.get('/', dataCostHandler.getAll);
router.get('/:id', dataCostHandler.get);
router.post('/', dataCostHandler.create);
router.put('/:id', dataCostHandler.update);
router.delete('/:id', dataCostHandler.destroy);

module.exports = router;
