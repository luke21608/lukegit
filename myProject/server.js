console.log("***myProject***");
console.log("***************");
//express & API
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//img test
app.use(express.static('public'));
app.use('/fake', express.static(__dirname + '/img/001.png'));
app.use('/img', express.static(__dirname + '/img'));
//pdf test
app.use('/pdf', express.static(__dirname + '/pdf/Resume.pdf'));

//VueJS test
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
	console.log("listening %d ...", port);
});

//handle json
const users = require('./route/api/users');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api/users", users);

app.post("/testServer",(req,res) => {
	var msg = req.body.name;
    res.json({msg: msg});
});


//MongoDB set
const mongoose = require('mongoose');
const dbUri = require('./config/db').uri;

mongoose.connect(dbUri, { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
	console.log("MongoDB connected!");
});

console.log("MongoDB connected!");