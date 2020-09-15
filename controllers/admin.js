const config = require('../config/constants');
const adminService = require('../services/adminServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');
const omitPassword = require("../_helpers/helperFuncs").omitPassword;



async function  adminLogin(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    console.log("password" + req.body.password);
    console.log("username" + req.body.username);
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const admin = await Admin.findOne({username});
    if(admin){
     bcrypt.compare(password, admin.password).then((result) => {
         console.log(result);
       if(result){
              //admin password in the token so we pick only the email and id
      const body = { _id : admin._id };
      //Sign the JWT token and populate the payload with the admin email and id
      const token = jwt.sign({ admin : body }, config.SECRET, { expiresIn: 60 });
      //Send back the token to the admin
       res.status(200).json({
          admin:omitPassword(admin._doc),
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
    adminService.create(req.body)
        .then(() => res.json({
            message: `admin with username ${req.body.username} was created`
        }))
        .catch(err => {
            next(err)
        });
}

function getAll(req, res, next) {
    adminService.getAll()
        .then(admins => res.json(admins))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    adminService.getById(req.admin.sub)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    adminService.getById(req.params.id)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    adminService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    adminService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
 

module.exports = {
    adminLogin,
    getAll,
    getById,
    register,
    update,
    delete: _delete
}; 