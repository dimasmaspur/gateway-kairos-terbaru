const express = require('express');
const router = express.Router();
const joRebateExpenseandler = require('./handler/joc-rebateexpense');

/* GET users listing. */
// router.get('/', joRebateExpenseandler.getAll);
router.get('/:id', joRebateExpenseandler.get);
router.get('/print/:id', joRebateExpenseandler.print);
router.post('/', joRebateExpenseandler.create);
router.put('/:id', joRebateExpenseandler.update);
router.delete('/:id', joRebateExpenseandler.destroy);

module.exports = router;
