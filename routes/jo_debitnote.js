const express = require('express');
const router = express.Router();
const joDebitNoteHandler = require('./handler/jo-debitnote');

/* GET users listing. */
router.get('/', joDebitNoteHandler.getAll);
router.get('/:id', joDebitNoteHandler.get);
router.get('/print/:id', joDebitNoteHandler.print);
router.post('/', joDebitNoteHandler.create);
router.put('/:id', joDebitNoteHandler.update);
router.delete('/:id', joDebitNoteHandler.destroy);

module.exports = router;
