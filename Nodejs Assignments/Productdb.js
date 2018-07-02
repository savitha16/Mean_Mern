var Amount=require('./Productfun1');
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/practice',function(err,db){
    if(err){
        console.log(err);
    }
    var resultSet=db.collection('Product').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        for(var i=0;i<result.length;i++){
            console.log("Amount= "+Amount.CalculateAmount(result[i].Qty,
                result[i].Price));
        }
        db.close();
    });
});