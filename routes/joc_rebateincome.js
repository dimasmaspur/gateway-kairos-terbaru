const express = require('express');
const router = express.Router();
const joRebateIncomeHandler = require('./handler/joc-rebateincome');

/* GET users listing. */
// router.get('/', joRebateIncomeHandler.getAll);
router.get('/:id', joRebateIncomeHandler.get);
router.get('/print/:id', joRebateIncomeHandler.print);
router.post('/', joRebateIncomeHandler.create);
router.put('/:id', joRebateIncomeHandler.update);
router.delete('/:id', joRebateIncomeHandler.destroy);

module.exports = router;
