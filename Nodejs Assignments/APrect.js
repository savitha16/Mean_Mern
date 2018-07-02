var http=require("http");
var info=require('./Funcrect.js');
http.createServer(function(req,res){
    if(req.url=='/'){
        res.end(info);
    }
    else if(req.url=="/Area"){
        var l=10;
        var b=5;
        var a=info.Area(l,b);
        res.end(a);
    
    }
    else if(req.url=="/Perimeter"){
        var l=10;
        var b=5;
        var p=info.Perimeter(l,b);
        res.end(p.toString());
    
    }
    else{
        res.end("404error found");
    }
    
    

}).listen(3000);
console.log("Hurray!! working");