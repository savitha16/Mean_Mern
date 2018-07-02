var http=require('http');
var server=http.createServer(function (request,response){
    console.log('Request starting');
    if(request.url=="/savi"){
        response.write(' This is savi');
        response.end();
    }
    if(request.url=="/sru")
        response.write('This is sru');
        response.end();
    
   
});

server.listen(3000);
console.log('server running at http://127.0.0.1:3000/savi');



