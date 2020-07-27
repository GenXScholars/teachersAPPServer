const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const JWT = require('jsonwebtoken');

const config = require('./config/constants');




// middleware configurations 
app.use(morgan('dev'));
// app.use(jwt());
app.use(cors());
// parse application/x-www-;form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());




app.listen(config.PORT, ()=>{
    console.log("server running on port" + " " + config.PORT)
})

module.exports = app;