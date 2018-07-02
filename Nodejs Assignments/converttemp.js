var http=require("http");
var convert=require('./convert.js');

http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(convert);
    
    }else if(req.url==="/temperature/celcius"){
        var f = 98.4;
        var c = convert.FtoC(f);
        res.end(c.toString());
    }else if (req.url==="/temperature/fahernhiet"){
       // convert.cToF(res);
    }else {
        res.end("404 error....Data not found");
    }
}).listen(3000);
console.log("server listeningon port 3000");