const express = require('express');
const router = express.Router();
const port_of_dischargeHandler = require('./handler/port_of_discharge');


/* GET users listing. */
router.get('/', port_of_dischargeHandler.getAll);
router.get('/:id', port_of_dischargeHandler.get);
router.post('/', port_of_dischargeHandler.create);
router.put('/:id', port_of_dischargeHandler.update);
router.delete('/:id', port_of_dischargeHandler.destroy);

module.exports = router;
