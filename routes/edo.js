const express = require('express');
const router = express.Router();
const edoHandler = require('./handler/edo');
// const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");


/* GET users listing. */
router.get('/', can("superadmin", "admin", "dokumen", "supervisor", "adminspl", "kasir"), edoHandler.getAll);
router.get('/total_edo', can("admin", "dokumen", "supervisor"), edoHandler.total_edo);
router.get('/:id', can("superadmin", "admin", "dokumen", "supervisor", "adminspl", "kasir"), edoHandler.get);
router.get('/send_to_consignee/:id', can("admin"), edoHandler.send);
router.get('/print/:id', can("admin", "dokumen"), edoHandler.print);
// router.get('/search/e_do_number/:id', edoHandler.search);
router.get('/search/e_do_number/:id', can("superadmin", "admin", "dokumen", "supervisor", "adminspl", "kasir"), edoHandler.search);
router.get('/scan_barcode/e_do_number/:id', can("superadmin", "admin", "dokumen", "supervisor", "adminspl", "kasir"), edoHandler.search);
router.put('/:id', can("dokumen"), edoHandler.update);
router.put('/approve/:id', can("superadmin", "admin", "dokumen", "adminspl", "kasir"), edoHandler.approve);
router.put('/reject/:id', can("superadmin", "admin", "dokumen", "adminspl", "kasir"), edoHandler.reject);
router.put('/reissued/:id', can("superadmin", "admin", "dokumen", "adminspl", "kasir"), edoHandler.reissued);
router.put('/picked_up/:id', can("superadmin", "admin", "dokumen", "adminspl", "kasir"), edoHandler.picked_up);

router.post('/', can("dokumen"), edoHandler.create);
router.delete('/:id', can("dokumen"), edoHandler.destroy);

module.exports = router;
