const express = require('express');
const router = express.Router();
const joCreditNoteCostHandler = require('./handler/jo-creditnote-cost');

/* GET users listing. */
router.get('/', joCreditNoteCostHandler.getAll);
router.get('/:id', joCreditNoteCostHandler.get);
router.post('/', joCreditNoteCostHandler.create);
router.put('/:id', joCreditNoteCostHandler.update);
router.delete('/:id', joCreditNoteCostHandler.destroy);

module.exports = router;
