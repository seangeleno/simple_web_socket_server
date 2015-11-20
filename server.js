var express = require('express')
var app     = express()
var http    = require('http')
var httpServer = http.Server(app)
var webSocketer = require('socket.io')(httpServer)

app.get('/', function(request,response){
 response.sendFile(__dirname + '/public/index.html')
})

webSocketer.on('connection', function(socket){
 console.log('a user has connected')
socket.on('color', function(data){
 console.log(data);
 webSocketer.emit('color', data);
});

socket.emit('server message', 'hello from the server');
});


httpServer.listen(3000, function(){console.log('listening on 3000')})
