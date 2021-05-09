const express = require('express');
const router = express.Router();
const rebateincomeCostHandler = require('./handler/joc-rebateincome-cost');

/* GET users listing. */
router.get('/', rebateincomeCostHandler.getAll);
router.get('/:id', rebateincomeCostHandler.get);
router.post('/', rebateincomeCostHandler.create);
router.put('/:id', rebateincomeCostHandler.update);
router.delete('/:id', rebateincomeCostHandler.destroy);

module.exports = router;
