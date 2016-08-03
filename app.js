var express 		 = require('express');
var path 				 = require('path');
var favicon 		 = require('serve-favicon');
var logger 			 = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser 	 = require('body-parser');
var passport 	 	 = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');

var routesApi = require('./app_api/routes/index');

var app = express();

app.use(passport.initialize());
app.use('/api', routesApi);