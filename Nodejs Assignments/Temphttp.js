
var MongoClient=require('mongodb').MongoClient;
var http=require("http");
var fs=require("fs");
var qs=require("querystring")
var celsius;
var fahren;
http.createServer(function(req,res){
   // console.log(req.method);
    if(req.method=="GET"){
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Temperature Conversion</title>
        </head>
        <body>
        <form action="/" method="post">
        <label>Farhenite</label>
        <input type="text" name="fahren",placeholder="Fahrenheit 
        temperature" required/>
        <button>click</button>
        </form>
        </body>
        </html>
     `);
    }


else if(req.method=="POST"){
    var body="";
    req.on("data",function(chunk){
        body+=chunk;
        console.log(body);
    
    });
}



    req.on("end",function(){
        var obj=qs.parse(body);
        console.log(obj.fahren);
        fahren=parseFloat(obj.fahren);
        celsius=(5/9)*(fahren-32.0);
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Temperature Conversion</title>
        </head>
        <body>
        <form action="/" method="post">
        <label>Farhenite</label>
        <input type="text" name="fahren" ,placeholder="Fahrenheit 
        temperature" value=${fahren}>
        <label>Celcius</label>
        <input type="text" name="celcius" ,placeholder="Celcius
        temperature" value=${celsius}>
        </form>
        </body>
        </html>
     `);
    });
    
    
     var insert={t1:fahren,t2:celsius};

     MongoClient.connect('mongodb://127.0.0.1:27017/NewTemp',function(err,db){
         if(err){
             console.log(err);
         }
         db.collection('temp').insert(insert,function(err,result){
             if(err) throw err;
             else{
                 console.log("1 record inserted");
             }
         db.close();
            
     })
    
    
       //res.end("Fahren ="+fahren.toString()+" celcius="+celsius.toString());
    });
    

    }).listen(3000);
    console.log("got it");








        
        
    