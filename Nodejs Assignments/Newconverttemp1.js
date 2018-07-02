var http=require("http");
var FuncTemp=require('./FuncTemp.js');
http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(FuncTemp);
    }
    else if(req.url==="/temp/celcius"){
        var f=78;
        var c=FuncTemp.FtoC(f);
        res.end(c.toString());

    }
    else if(req.url==="/temp/faran"){
        var ff=23;
        var cc=FuncTemp.CtoF(ff);
        res.end(cc.toString());
    }

    
    else{
        res.end("404 file not found");
    }

}).listen(3000);
console.log("server accepting the request");
