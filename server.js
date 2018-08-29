var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var address = "https://zheenek.github.io/simplechat/";

app.use(express.static('public'));

app.get(address, function(req, res) {
    res.sendFile(__dirname + '/');
});

io.on('connection', function(socket) {
    var user = 'User' + Date.now();
    var date = new Date(),
        currentDate = date.getHours() + ":" + date.getMinutes();

    socket.on('message.sent', function(message) {
        io.emit('message', currentDate + ' ' + user + ': ' + message);
        //console.log("User"+user+": " + message);
    });

    io.emit('message', user + ' connected');
    //console.log('User' + user + ' connected');
});

http.listen(https://zheenek.github.io/simplechat/, function() {
    console.log("Launching server...");
});
