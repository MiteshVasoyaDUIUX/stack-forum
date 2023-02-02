var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {notFound, errorHandler} = require('./middleware/middleware');
const auth = require('./auth/auth');
require('dotenv').config();
const passport = require('./passport/google')
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.json({
        message : "Response..."
    })
})

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
