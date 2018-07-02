var MongoClient=require('mongodb').MongoClient;
var http=require("http");
var fs=require("fs");
var qs=require("querystring")
var EmpId;
var Ename;
var BasicPay;
var NetPay;
var HRA;
var GrossPay;


http.createServer(function(req,res){
     if(req.method=="GET"){
         res.end(`
         <!DOCTYPE html>
         <html>
         <head>
         <title>Emplopyee Details</title>
         </head>
         <body>
         <form action="/" method="post">
         <label>EmpId</label>
         <input type="text" name="EmpId",placeholder="Employee Id"
          required/>
          <label>Ename</label>
          <input type="text" name="Ename" ,placeholder="Employee Name" required/>
          <label>Basic Pay</label>
          <input type="text" name="BasicPay",placeholder="Basic salary" required/>

         <button>Calculate</button>
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

req.on("end",function(){
    var obj=qs.parse(body);
    console.log(obj.BasicPay);
    EmpId = obj.EmpId;
    Ename=obj.Ename;
    BasicPay=parseFloat(obj.BasicPay);
    if(BasicPay>50000){
        HRA=(40/100)*(BasicPay)
        GrossPay=BasicPay+HRA;
        NetPay=GrossPay-1000;
    }
    else{
        HRA=(30/100)*(BasicPay)
        GrossPay=BasicPay+HRA;
        NetPay=GrossPay-1000;
    }
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Emplopyee Details</title>
    </head>
    <body>
    <form action="/" method="post">
    <label>EmpId</label>
    <input type="text" name="EmpId" ,placeholder="Employee Id" value=${EmpId}>
    <label>Ename</label>
    <input type="text" name="Ename" ,placeholder="Employee Name"
     value=${Ename}>
      <label>Basic Pay</label>
     <input type="text" name="BasicPay",placeholder="Basic salary" value=${BasicPay}>
     <label>NetPay</label>
     <input type="text" name="NetPay",placeholder="Net salary" value=${NetPay}


    </form>
    </body>
    </html>
 `);
 var inserted={EmpId:EmpId,Ename:Ename,BasicPay:BasicPay,NetPay:NetPay};

     MongoClient.connect('mongodb://127.0.0.1:27017/Nodejs',function(err,db){
         if(err){
             console.log(err);
         }
         var result=db.collection('Employee').insert(inserted,function(err,result){
             if(err) throw err;
             else{
                 console.log("1 record inserted");
             }
         db.close();
             
     })   
                 
     })
    
});}



        
}).listen(3000);

console.log("got it");
