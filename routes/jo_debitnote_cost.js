const express = require('express');
const router = express.Router();
const joDebitNoteCostHandler = require('./handler/jo-debitnote-cost');

/* GET users listing. */
router.get('/', joDebitNoteCostHandler.getAll);
router.get('/:id', joDebitNoteCostHandler.get);
router.post('/', joDebitNoteCostHandler.create);
router.put('/:id', joDebitNoteCostHandler.update);
router.delete('/:id', joDebitNoteCostHandler.destroy);

module.exports = router;
