/**
 * Module dependencies.
 */

var express   = require('express'),
    http      = require('http'),
    path      = require('path'),
    io        = require('socket.io'),
    conf      = require('./local_conf.json'),
    app       = express(),
    adminUser = conf.adminUser,
    adminPwd  = conf.adminPwd;

app.configure(function(){
  app.use(express.static(path.join(__dirname, 'public')));
});

// Authentication
var auth = express.basicAuth(adminUser, adminPwd);
 
app.get('/', auth, function(req, res){
  res.sendfile(__dirname + '/views/admin.html');
});
 
app.get('/client', function(req, res){
  res.sendfile(__dirname + '/views/public.html');
});
 
var server = http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000");
});

var serv_io = io.listen(server);
serv_io.sockets.on('connection', function (socket) {
    socket.emit("message", "Welcome to Revealer");
    socket.on("slidechanged", function(data){
        socket.broadcast.emit("slidechanged", data);
    });
});
