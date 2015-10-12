var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
		console.log('message: ' + msg);	
	});
});

server.listen(3000, function(){
	console.log('listening on *:3000');
});

