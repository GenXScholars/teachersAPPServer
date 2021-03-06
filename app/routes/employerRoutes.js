const express = require('express');
const router = express.Router();
const paths = require('./paths/employerPaths');


const EmployerController = require('../controllers/employer');

router.get(paths.getSingleEmployers, EmployerController.getById);
router.get(paths.getAllEmployers, EmployerController.getAll);
router.put(paths.updateAnEmployer, EmployerController.update);
router.delete(paths.deletAnEmployer, EmployerController.delete);



module.exports = router;