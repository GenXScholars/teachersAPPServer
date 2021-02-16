const express = require('express');
const router = express.Router();
const paths = require('./paths/cvPaths');


const CvController = require('../controllers/cv');

router.post(paths.createACv, CvController.create);
router.get(paths.getSingleCv, CvController.getById);
router.get(paths.getAllCvs, CvController.getAll);
router.put(paths.updateCv, CvController.update);
router.delete(paths.deletACV, CvController.deleteCv);



module.exports = router;