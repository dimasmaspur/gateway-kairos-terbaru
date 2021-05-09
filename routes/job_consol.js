const express = require('express');
const router = express.Router();
const jocHandler = require('./handler/job-consol');

/* GET users listing. */
router.get('/', jocHandler.getAll);
router.get('/:id', jocHandler.get);
router.post('/', jocHandler.create);
router.put('/:id', jocHandler.update);
router.delete('/:id', jocHandler.destroy);

module.exports = router;
