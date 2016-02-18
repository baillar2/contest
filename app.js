
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

var listItem = function(obj){
		this.name = obj.name, 
		this.url = obj.url, 
		this.title = obj.title, 
		this.description = obj.description, 
		this.rating = obj.rating
}

var list = [
	{
		name	: 'Tom Cat',
		url 	: "https://www.youtube.com/embed/SrXAaWyDWOY",
		title	: 'It\'s friday!!',
		description : 'This is what I do in my free time.',
		rating	: 0
	}
]



// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root:'/public'})
});
app.get('/api/list', function(req, res){
	res.send(list)
})
app.post('/api/list', function(req, res){
	if(list.length < 8){
		var item = new listItem(req.body)
		list.push(item)
		res.send(list)
	}
	else {
		res.send('Too Many Videos Brah!!!!!!!')
	}
})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
















