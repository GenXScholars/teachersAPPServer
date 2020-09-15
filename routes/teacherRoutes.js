const express = require('express');
const router = express.Router();
const paths = require('./paths/teacherPaths');

const TeacherController = require('../controllers/teacher');

router.post(paths.teacherSignUp, TeacherController.register);
router.post(paths.teacherLogin, TeacherController.login);
router.get(paths.getSingleTeacher, TeacherController.getById);
router.get(paths.getAllTeachers, TeacherController.getAll);
router.put(paths.updateATeacher, TeacherController.update);
router.delete(paths.deletATeacher, TeacherController.delete);



module.exports = router;