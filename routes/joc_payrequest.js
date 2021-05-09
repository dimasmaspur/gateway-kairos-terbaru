const express = require('express');
const router = express.Router();
const payrequestHandler = require('./handler/joc-payrequest');

/* GET users listing. */
// router.get('/', payrequestHandler.getAll);
router.get('/:id', payrequestHandler.get);
router.get('/print/:id', payrequestHandler.print);
router.post('/', payrequestHandler.create);
router.put('/:id', payrequestHandler.update);
router.delete('/:id', payrequestHandler.destroy);

module.exports = router;
