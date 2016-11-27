var path = require('path');
var http = require('http');
var fs = require('fs');
var express = require('express');
 
var app = express();
var server = new http.Server(app);


var dll = fs.readFileSync('app/dll/library.dll.js', {
    encoding: 'utf-8'
});
console.log(dll)
app.get('/dll/library.dll.js', function(req, res) {
    res.status(200).send(dll);
});
app.get('/', function(req, res) {
    var index = fs.readFileSync('app/index.html', {
        encoding: 'utf-8'
    });
    res.status(200).send(index);
});
app.get('/img/*',  function(req, res) {
    console.log(req.params)
    var index = fs.readFileSync('app/img/'+req.params['0']);
    res.status(200).send(index);
});
app.get('/bundle.js', function(req, res) {
     var index = fs.readFileSync('app/bundle.js', {
        encoding: 'utf-8'
    });
    res.status(200).send(index);
});
app.get('*', function(req, res) {
    res.status(404).send('Server.js > 404 - Page Not Found');
});
app.use((err, req, res, next) => {
    console.error("Error on request %s %s", req.method, req.url);
    console.error(err.stack);
    res.status(500).send("Server error");
});
process.on('uncaughtException', evt => {
    console.log('uncaughtException ', evt);
});
server.listen('9000', (err) => {
    if (err) {
        console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', '9000');
});