const express = require('express');
const router = express.Router();
const dataPartnerHandler = require('./handler/data-partner');

/* GET users listing. */
router.get('/', dataPartnerHandler.getAll);
router.get('/:id', dataPartnerHandler.get);
router.post('/', dataPartnerHandler.create);
router.put('/:id', dataPartnerHandler.update);
router.delete('/:id', dataPartnerHandler.destroy);

module.exports = router;
