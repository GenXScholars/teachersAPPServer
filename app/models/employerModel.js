const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const tables = require('./schemas/employerSchema');

const employerSchema = new Schema(tables.schemas);
adminSchema.plugin(uniqueValidator, { message :'Error, {PATH} must be unique'});
const Employer = mongoose.model('employer', employerSchema);


module.exports = Employer;