const express = require('express');
const router = express.Router();
const joPayrequestHandler = require('./handler/jo-payrequest');

/* GET users listing. */
router.get('/', joPayrequestHandler.getAll);
router.get('/:id', joPayrequestHandler.get);
router.get('/print/:id', joPayrequestHandler.print);
router.post('/', joPayrequestHandler.create);
router.put('/:id', joPayrequestHandler.update);
router.delete('/:id', joPayrequestHandler.destroy);

module.exports = router;
