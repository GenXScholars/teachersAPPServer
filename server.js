const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const JWT = require('jsonwebtoken');
const errorHandler = require("./_helpers/errorhandler");

const config = require('./app/config/constants');




// middleware configurations 
app.use(morgan('dev'));
// app.use(jwt());
app.use(cors());
// parse application/x-www-;form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(errorHandler);

app.use("/", (req, res, next)=> {
    console.log(process.env.PORT);
      res.status(200).json({
          message: "The official trainedteachers app"
      })
  })


module.exports = app;