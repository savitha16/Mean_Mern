var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var EmpId;
var amt;
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
            <label>New Amount</label><br>
            <input type="text" id="amt" name="amt" required/><br>
           
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
    amt=obj1.amt;
    EmpId=obj1.EmpId;
    console.log(EmpId);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Nodejs");
      var amt1=parseFloat(amt);
      var val={$inc:{BasicPay: amt1 }}
      console.log(EmpId);
      console.log(amt1);
    dbo.collection("Employee").updateOne({EmpId:EmpId},val,function(err){
        if (err)
        {
            throw err;
        }
        else{
        res.end(`
        <html>
        <head>
        
        </head>
        <body><center>
        <h1>Employee Details</h1><hr>
        <form action="/" method="POST">
        <label>EmpId:${EmpId} Basic payUpdated!</label><br>
        </form></body></html>`);
    ;}
    db.close();
      });
});
    });
}}).listen(3000);
console.log("form server listening on port 3000");
