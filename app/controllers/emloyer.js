const config = require('../config/constants');
const employerService = require('../services/employersServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Employer = require('../models/employerModel');
const omitPassword = require("../_helpers/helperFuncs").omitPassword;



async function  login(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    console.log("password" + req.body.password);
    console.log("username" + req.body.username);
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const admin = await Employer.findOne({username});
    if(employer){
     bcrypt.compare(password, employer.password).then((result) => {
       if(result){
              //admin password in the token so we pick only the email and id
      const body = { _id : admin._id };
      //Sign the JWT token and populate the payload with the admin email and id
      const token = jwt.sign({ employer : body }, config.SECRET, { expiresIn: 60 });
      //Send back the token to the admin
       res.status(200).json({
          employer:omitPassword(employer._doc),
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

function getAll(req, res, next) {
    employerService.getAll()
        .then(admins => res.json(admins))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    employerService.getById(req.admin.sub)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    employerService.getById(req.params.id)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    employerService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    employerService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
 

module.exports = {
    getAll,
    getById,
    update,
    delete: _delete
}; 