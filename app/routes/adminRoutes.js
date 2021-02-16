const express = require('express');
const router = express.Router();
const paths = require('./paths/adminPaths');


const AdminController = require('../controllers/admin');

router.get(paths.getSingleAdmin, AdminController.getById);
router.get(paths.getAllAdmins, AdminController.getAll);
router.post(paths.adminSignUp, AdminController.register);
router.post(paths.adminLogin, AdminController.adminLogin);
router.put(paths.updateAdmin, AdminController.update);
router.delete(paths.deletAnAdmin, AdminController.delete);



module.exports = router;