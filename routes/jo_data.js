const express = require('express');
const router = express.Router();
const joDataHandler = require('./handler/jo-data');

/* GET users listing. */
router.get('/', joDataHandler.getAll);
router.get('/:id', joDataHandler.get);
router.post('/', joDataHandler.create);
router.put('/:id', joDataHandler.update);
router.delete('/:id', joDataHandler.destroy);

module.exports = router;
