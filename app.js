
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))

var list = [
	{
		name	: 'Tom Cat',
		url 	: "https://www.youtube.com/embed/SrXAaWyDWOY",
		title	: 'It\'s friday!!',
		description : 'This is what I do in my free time.'
	}
]



// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root:'/public'})
});
app.get('/api/list', function(req, res){
	res.send(list)
})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


