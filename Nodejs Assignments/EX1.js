var MongoClient=require('mongodb').MongoClient;
var findQuery={Bid:103};
MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db){
    if(err)
        console.log(err)
    else{
//var resultSet=db.collection('Book').find();
var resultSet=db.collection('Book').find(findQuery);
        resultSet.each(function(err,doc){
            console.log(doc);
        })
    }
    db.close();

});