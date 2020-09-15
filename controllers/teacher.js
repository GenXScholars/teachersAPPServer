const config = require('../config/constants');
const teacherService = require('../services/teachersServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Teacher = require('../models/teacherModel');
const omitPassword = require("../_helpers/helperFuncs").omitPassword;



async function  login(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const teacher = await Teacher.findOne({username});
    if(teacher){
     bcrypt.compare(password, teacher.password).then((result) => {
       if(result){
              //teacher password in the token so we pick only the email and id
      const body = { _id : teacher._id };
      //Sign the JWT token and populate the payload with the teacher email and id
      const token = jwt.sign({ teacher : body }, config.SECRET, { expiresIn: 60 });
      //Send back the token to the teacher
       res.status(200).json({
          teacher:omitPassword(teacher._doc),
          token
         })
       } 
     })      
    } else {
        res.status(404).json({
            message: "username or password inccorect"
        })
    }
}

function register(req, res, next) {
    teacherService.create(req.body)
        .then(() => res.json({
            message: `teacher with username ${req.body.username} was created`
        }))
        .catch(err => {
            next(err)
        });
}

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
    register,
    login,
    getAll,
    getById,
    update,
    delete: _delete
}; 