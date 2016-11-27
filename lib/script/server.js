var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '../../app')));
app.set('views', path.join(__dirname, '../../app'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function (request, response) {
    response.render('index.html');
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
//# sourceMappingURL=server.js.map