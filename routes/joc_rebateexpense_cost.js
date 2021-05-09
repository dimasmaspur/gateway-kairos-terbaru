const express = require('express');
const router = express.Router();
const rebateexpenseCostHandler = require('./handler/joc-rebateexpense-cost');

/* GET users listing. */
router.get('/', rebateexpenseCostHandler.getAll);
router.get('/:id', rebateexpenseCostHandler.get);
router.post('/', rebateexpenseCostHandler.create);
router.put('/:id', rebateexpenseCostHandler.update);
router.delete('/:id', rebateexpenseCostHandler.destroy);

module.exports = router;
