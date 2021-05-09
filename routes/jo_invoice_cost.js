const express = require('express');
const router = express.Router();
const joinvoiceCostHandler = require('./handler/jo-invoice-cost');

/* GET users listing. */
router.get('/', joinvoiceCostHandler.getAll);
router.get('/:id', joinvoiceCostHandler.get);
router.post('/', joinvoiceCostHandler.create);
router.put('/:id', joinvoiceCostHandler.update);
router.delete('/:id', joinvoiceCostHandler.destroy);

module.exports = router;
