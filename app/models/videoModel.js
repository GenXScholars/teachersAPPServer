const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const tables = require('./schemas/VideoSchema');

const videoSchema = new Schema(tables.schemas);
adminSchema.plugin(uniqueValidator, { message :'Error, {PATH} must be unique'});
const Video = mongoose.model('video', videoSchema);


module.exports = Video;