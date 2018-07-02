var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var EmpId;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `
            <html>
            <head>
            
            </head>
            <body><center>
            <h1>Employee Details</h1><hr>
            <form action="/" method="POST">
            <label>EmpId:</label><br>
            <input type="text" id="EmpId" name="EmpId" required/><br>
            
            <button>Submit</button>
            </form></body></html>`
             );
    }
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
        //console.log(body);
    });
    req.on("end",function()
{
    var obj1=qs.parse(body);
    //console.log(obj.far);
    EmpId=obj1.EmpId;
   
    
                
            MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
              if (err) throw err;
              var dbo = db.db("Nodejs");
              var del = { EmpId:EmpId};
              console.log(EmpId);
              var obj=dbo.collection("Employee").deleteOne(del, function(err, obj) {
                if (err)
                {
                    res.write(`ID DoNot Exists!`)
                }
                res.end(`
            <html>
            <head>
            
            </head>
            <body><center>
            <h1>Employee Details</h1><hr>
            <form action="/" method="POST">
            <label>EmpId:${EmpId} Deleted!</label><br>
            </form></body></html>`);
            console.log(EmpId);
                db.close();
              });
         });
    });
}}).listen(3000);
console.log("form server listening on port 3000");