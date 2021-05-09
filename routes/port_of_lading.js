const express = require('express');
const router = express.Router();
const port_of_ladingHandler = require('./handler/port_of_lading');


/* GET users listing. */
router.get('/', port_of_ladingHandler.getAll);
router.get('/:id', port_of_ladingHandler.get);
router.post('/', port_of_ladingHandler.create);
router.put('/:id', port_of_ladingHandler.update);
router.delete('/:id', port_of_ladingHandler.destroy);

module.exports = router;
