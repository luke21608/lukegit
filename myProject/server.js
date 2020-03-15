console.log("***myProject***");
console.log("***************");
//express & API
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get("/", function(req,res){
	res.send("hello world");
});

app.listen(port, () => {
	console.log("listening %d ...", port);
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
