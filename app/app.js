var express 	= require('express');
var path       	= require('path');
var http		= require('http');
var consign 	= require('consign');
var bodyParser 	= require('body-parser');
var port       	= process.env.PORT || 3000;
var app        	= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/assets'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

consign({cwd: 'app'})
    .include('controllers')
    .then('routes')
    .into(app);

app.start = function() {
	server = http.createServer(app);
	server.listen(port, function() {
		console.log('Wow! Check this application running in localhost:' + port + '!!!');
	});
};

app.stop = function() {
	server.close();
	console.log('See u =)');
};

module.exports = app;