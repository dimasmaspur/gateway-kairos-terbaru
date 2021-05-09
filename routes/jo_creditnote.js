const express = require('express');
const router = express.Router();
const joCreditNoteHandler = require('./handler/jo-creditnote');

/* GET users listing. */
router.get('/', joCreditNoteHandler.getAll);
router.get('/:id', joCreditNoteHandler.get);
router.get('/print/:id', joCreditNoteHandler.print);
router.post('/', joCreditNoteHandler.create);
router.put('/:id', joCreditNoteHandler.update);
router.delete('/:id', joCreditNoteHandler.destroy);

module.exports = router;
