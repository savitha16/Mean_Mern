var MongoClient=require('mongodb').MongoClient;
var insert={_id:11,Bid:111,Bname:"Mains",cost:15000};
MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db){
    if(err){
        console.log(err);

    }
    var resultSet=db.collection('Book').insert(insert,function(err,result){
        if(err) throw err;
        else{
            console.log("document inserted successfully");
        }
        db.close();
    })
});
