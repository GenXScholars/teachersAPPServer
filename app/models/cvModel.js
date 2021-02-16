const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const tables = require('./schemas/cvBuilderSchema');

const cvSchema = new Schema(tables.schemas);
adminSchema.plugin(uniqueValidator, { message :'Error, {PATH} must be unique'});
const Cv = mongoose.model('cv', cvSchema);


module.exports = Cv;