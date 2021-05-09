const express = require('express');
const router = express.Router();
const joHandler = require('./handler/job-order');

/* GET users listing. */
router.get('/', joHandler.getAll);
router.get('/:id', joHandler.get);
router.post('/', joHandler.create);
router.put('/:id', joHandler.update);
router.delete('/:id', joHandler.destroy);

module.exports = router;
