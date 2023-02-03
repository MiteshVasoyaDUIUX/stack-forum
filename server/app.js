var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {notFound, errorHandler, checkAuthHeader, checkAuthurizationHeader} = require('./middleware/middleware');
const auth = require('./auth/auth');
require('dotenv').config();
const passports = require('./passport/google');
const passport  = require('passport');
var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(checkAuthHeader);

app.get('/', (req, res) =>{
    res.json({
        message : "Response..."
    })
})

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
