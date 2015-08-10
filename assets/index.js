var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/',function(req,res){
  res.sendFile(__dirname + '/chat.html');
});
app.use('/assets', express.static(__dirname + '/assets'));

io.on('connection',function(socket){
  socket.on('chat message',function(msg,username){
    socket.emit('message',msg,username);
    socket.broadcast.emit('message',msg,username);
    console.log('message: '+msg);
  });
  socket.on("sendNewUser",function(username){
    socket.broadcast.emit('newUser',username);
  });
});

http.listen(3000,function(){
  console.log('listening on *:3000');
});
 
