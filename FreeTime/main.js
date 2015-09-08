var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('monk')('localhost/freetime');


// routes
var home = require('./routes/HomeRoute');
var users = require('./routes/users');
var signup = require('./routes/SignUpRoute')

// classes
var InsertUser = require('./models/InsertUsers');
var Error = require('./models/Error');

var app = express();
// use monk?
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/users', users);
app.use('/signup/', SignUpRoute)

app.post('/api/signup/', function(req, res, next){
  var email = req.body.email;
  if(email != undefined){
    if (typeof email === 'string' || email instanceof String){
      console.log("foo");
      InsertUser.insertUser(email, function(err, doc){
        if(err){
          //handle error
          console.log(err)
          res.send(err)
        }
        else{
          res.send(doc);
        }
      })
    }
    else{
      console.log(Error.badRequestError());
      res.send()
    }
  } else{ // bad request
    console.log(Error.badRequestError());
    res.send()
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(80, function(){
  var host = server.address().address;
  var port = server.address().port;
  var users = db.get('users');
  users.index('email');

  console.log('app listening at http://%s:%s', host, port);

})


module.exports = app;
