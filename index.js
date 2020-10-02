'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// require('dotenv').config();
const app = express();

//Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, Access-Control-Allow-Headers, X-Requested-With, Content-Type, Authorization'
	);
	next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const customerController = require(__dirname + '/controllers/customer_controller');
const companyController = require(__dirname + '/controllers/company_controller');
const reportsController = require(__dirname + '/controllers/reports_controller');

app.use('/', customerController);
app.use('/company', companyController);
app.use('/report', reportsController);

const port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log('Your node js server is running on port: ' + port );
});

module.exports = app;
