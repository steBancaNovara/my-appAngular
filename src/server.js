
var express=require('express');
var app=express();

app.get('/', function(req,res,next){
    res.send('./index.html');
    next();
})
app.listen(3000);