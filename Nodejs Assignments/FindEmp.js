var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
//var funemp=require("./funemp");
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
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            <label>Employee ID:</label><br>
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
    
     var EmpId=obj1.EmpId;
    console.log(EmpId);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Nodejs");
      var findCriteria={"EmpId":EmpId};
      console.log(EmpId);
       var doc= dbo.collection("Employee").findOne(findCriteria,function(err, doc){
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
    <h1>Employee_Data</h1><hr>
    <form action="/" method="POST">
    <label>EmpId:</label><br>
    <input type="text" id="EmpId" name="EmpId" value=${EmpId}><br>
    <label>Employee Name</label><br>
    <input type="text" id="Ename" name="Ename" value=${doc.Ename}><br>
    <label>BasicPay</label><br>
    <input type="text" id="BasicPay" name="BasicPay" value=${doc.BasicPay}><br>
    <label>NetPay</label><br>
    <input type="text" id="net" name="NetPay" value=${doc.NetPay}><br><br>
    
    <button>Submit</button><br>
    </form></body></html>`);
    console.log(doc);}
    db.close();
      });
});
    });
}}).listen(3000);
console.log("form server listening on port 3000");