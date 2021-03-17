var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('halaman/halaman1');
});

app.get('/halaman2', function(req,res){
    res.render('halaman/halaman2');
});

app.listen(8000);
console.log('server is okay');