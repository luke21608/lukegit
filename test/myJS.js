console.log("***lukegit***");
console.log("*************");
/*
console.log("#test express");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/fake', express.static(__dirname + '/img'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/submit', function(req, res){
	var name = req.body.firstName + req.body.lastName;
	res.send(name + " > post ok!");
});

app.listen(3000, function(){
	console.log('listening 3000...');
})
/*
console.log("#test http");
var http = require("http");

var server = http.createServer(function(req, res){
	if(req == '/'){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("<html><body>test http</body></html>");
		res.end();
	}else if(req == '/getName'){
		res.writeHead(200, {'Content-Type':'application/json'});
		res.write(JSON.stringify({name: "Luke"}));
		res.end();
	}
});
server.listen(7000);
//server.close();
console.log("port 7000 running...");
*/
/*
console.log("#test readFile");
var fs = require("fs");
fs.readFile("README.md", function(err, data){
	if(err) throw err;

	console.log(data.toString());

	fs.appendFile("README.md", " #hi", function(err){
	if(err)
		console.log(err);
	else
		console.log("append ok!");
	});
});
*/

