var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var compression = require('compression');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

var config = require('./config');

var users = require('./routes/users');

var errors = require('./components/errors');


console.log('Configuration: ' + config.database["url"]);

var mongoose = require('mongoose');
mongoose.connect('mongodb://'+ config.database["user"] + ':' + config.database["password"] + '@' + config.database["url"] + '/' + config.database["name"], function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();


var env = app.get('env');

// view engine setup
app.set('views', path.join(config.root, 'server/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

app.use('/users', users);

// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/
// All undefined asset or api routes should return a 404
app.route('/:url(api|auth|components|app|bower_components|assets)/*')
 .get(errors[404]);

// All other routes should redirect to the index.html
app.route('/*')
  .get(function(req, res) {
    res.sendFile('/index.html', {root: app.get('appPath')});
  });

if ('production' === env) {
  app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  app.use(express.static(path.join(config.root, 'public')));
  app.set('appPath', path.join(config.root, '/public'));
  app.use(logger('dev'));
}

if ('development' === env || 'test' === env) {
  app.use(require('connect-livereload')());
  app.use(express.static(path.join(config.root, '.tmp')));
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');
  app.use(logger('dev'));
  app.use(errorHandler()); // Error handler - has to be last
}


module.exports = app;
