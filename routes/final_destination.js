const express = require('express');
const router = express.Router();
const final_destinationHandler = require('./handler/final_destination');


/* GET users listing. */
router.get('/', final_destinationHandler.getAll);
router.get('/:id', final_destinationHandler.get);
router.post('/', final_destinationHandler.create);
router.put('/:id', final_destinationHandler.update);
router.delete('/:id', final_destinationHandler.destroy);

module.exports = router;
