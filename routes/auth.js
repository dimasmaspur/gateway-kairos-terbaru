const express = require('express');
const router = express.Router();
const authHandler = require('./handler/auth');
const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");


router.post('/login', authHandler.login);
router.put('/edit_password/:id', verifyToken, can("superadmin", "admin", "dokumen", "adminspl", "kasir", "supervisor"), authHandler.edit_password);


module.exports = router;
