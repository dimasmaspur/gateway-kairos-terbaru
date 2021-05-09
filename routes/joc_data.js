const express = require('express');
const router = express.Router();
const jocDataHandler = require('./handler/joc-data');

/* GET users listing. */
router.get('/', jocDataHandler.getAll);
// router.get('/:id', jocDataHandler.get);
router.post('/', jocDataHandler.create);
// router.put('/:id', jocDataHandler.update);
router.delete('/:id', jocDataHandler.destroy);

module.exports = router;
