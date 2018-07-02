var http=require('http');
var fs=require('fs');
var path=require('path');
http.createServer(function(req,res){
    console.log(`${req.method} request for ${req.url}`);
    if(req.url.match("img1.jpg")){
        var imgpath=path.join(__dirname,'newHttp', req.url);
        var imgStream=fs.createReadStream(imgpath);
        imgStream.pipe(res);
    }
    else{
        res.end("404 File Not Found");
    }

}).listen(3000);
console.log("Server running");
