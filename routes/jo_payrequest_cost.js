const express = require('express');
const router = express.Router();
const joPayrequestCostHandler = require('./handler/jo-payrequest-cost');

/* GET users listing. */
router.get('/', joPayrequestCostHandler.getAll);
router.get('/:id', joPayrequestCostHandler.get);
router.post('/', joPayrequestCostHandler.create);
router.put('/:id', joPayrequestCostHandler.update);
router.delete('/:id', joPayrequestCostHandler.destroy);

module.exports = router;
