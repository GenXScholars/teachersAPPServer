const config = require('../config/constants');
const teacherService = require('../services/teachersServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Teacher = require('../models/teacherModel');
const omitPassword = require("../_helpers/helperFuncs").omitPassword;



function getAll(req, res, next) {
    teacherService.getAll()
        .then(teachers => res.json(teachers))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    teacherService.getById(req.teacher.sub)
        .then(teacher => teacher ? res.json(teacher) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    teacherService.getById(req.params.id)
        .then(teacher => teacher ? res.json(teacher) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    teacherService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    teacherService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
 

module.exports = {
    getAll,
    getById,
    update,
    delete: _delete
}; 