const express = require('express');
const router = express.Router();
const userHandler = require('./handler/user');

/* GET users listing. */
router.get('/', userHandler.getAll);
router.get('/:id', userHandler.get);
router.post('/', userHandler.create);
router.put('/:id', userHandler.update);
router.delete('/:id', userHandler.destroy);

module.exports = router;
