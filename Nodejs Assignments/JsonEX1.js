var http=require('http');
var info=require("./json1");
var bal=require("./balEX1");
http.createServer(function(req,res){
    if(req.url=="/"){
        res.end(JSON.stringify(info));
    }
    else if(req.url=="/instock"){
        bal.listInStock(res);
    }
    else if(req.url=="/onorder"){
        listOnBackOrder(res);
    }
    else{
        res.end("404 Error.... Data not found");
    }
}).listen(3000);
console.log("server listing on port 3000");

/*function listInStock(res){
    var inStock=info.filter(function(item){
        return item.avail==="In stock";
    });
    res.end(JSON.stringify(inStock));

}*/
function listOnBackOrder(res){
    var onOrder=info.filter(function(item){
        return item.avail==="on back order";

    });
    res.end(JSON.stringify(onOrder));
}


    
