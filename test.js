var express = require('express');
var app = express();

app.get('/', function (req, res) {
//  res.send('Hello World!');
    res.redirect('http://news.google.com.tw');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

// will match request to the root
//app.get('/', function (req, res) {
//	res.send('root');
//});
//
//   // will match requests to /about
app.get('/about', function (req, res) {
	res.send('about');
});
//
//     // will match request to /random.text
app.get('/random.text', function (req, res) {
	res.send('random.text');
});


// will match acd and abcd
app.get('/ab?cd', function(req, res) {
	res.send('ab?cd');
});
//
//   // will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
	res.send('ab+cd');
});
//
//     // will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
	res.send('ab*cd');
});
//
//       // will match /abe and /abcde
app.get('/ab(cd)?e', function(req, res) {
	res.send('ab(cd)?e');
});

app.get('/*', function(req, res) {
//        res.send('ab(cd)?e');
//	res.redirect('/');
//
    res.redirect('http://news.google.com.tw');
});

