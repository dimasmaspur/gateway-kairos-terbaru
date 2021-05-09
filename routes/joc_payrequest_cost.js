const express = require('express');
const router = express.Router();
const jocPayrequestCostHandler = require('./handler/joc-payrequest-cost');

/* GET users listing. */
router.get('/', jocPayrequestCostHandler.getAll);
router.get('/:id', jocPayrequestCostHandler.get);
router.post('/', jocPayrequestCostHandler.create);
router.put('/:id', jocPayrequestCostHandler.update);
router.delete('/:id', jocPayrequestCostHandler.destroy);

module.exports = router;
