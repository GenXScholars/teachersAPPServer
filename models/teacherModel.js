const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const tables = require('./schemas/teacherSchema');

const teacherSchema = new Schema(tables.schemas);
adminSchema.plugin(uniqueValidator, { message :'Error, {PATH} must be unique'});
const Teacher = mongoose.model('teacher', teacherSchema);


module.exports = Teacher;