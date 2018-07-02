var http=require("http");
var fs=require("fs");
var qs=require("querystring")
var celsius;
var fahren;
http.createServer(function(req,res){
   // console.log(req.method);
    if(req.method=="GET"){
        res.end(`