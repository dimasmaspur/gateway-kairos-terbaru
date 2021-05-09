const express = require('express');
const router = express.Router();
const joInvoiceHandler = require('./handler/jo-invoice');

/* GET users listing. */
// router.get('/', joInvoiceHandler.getAll);
router.get('/:id', joInvoiceHandler.get);
// router.get('/print/:id', joInvoiceHandler.print);
router.post('/', joInvoiceHandler.create);
router.put('/:id', joInvoiceHandler.update);
router.delete('/:id', joInvoiceHandler.destroy);

module.exports = router;
