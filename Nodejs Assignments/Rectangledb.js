var rectangle=require('./Rectangle1');
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/Area',function(err,db){
    if(err){
        console.log(err);
    }
    var resultSet=db.collection('Rectangle').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        for(var i=0;i<result.length;i++){
            console.log("Area= "+rectangle.CalculateArea(result[i].length,
                result[i].breadth));
        }
        db.close();
    });
});