var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(2345, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('The server is listening at %s:%s', host, port);
});