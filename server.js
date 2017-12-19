var express = require('express');
var app = express();
//var upload = require('express-fileupload');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require('path');
var port = 8080; //process.env.PORT || 

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	res.render('index', {port: port});
});

app.post('/upload', upload.single('userFile'), function(req, res) {
	console.log(req.file.size);
	res.json({size: req.file.size + ' bytes'});
});

app.listen(port, function(req,res) {
	console.log('here on ' + port);
});