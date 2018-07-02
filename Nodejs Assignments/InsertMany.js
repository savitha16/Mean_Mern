var MongoClient=require('mongodb').MongoClient;
var insertMany=[{_id:8,Bid:108,Bname:"Half Girl Frnd",cost:15600},
{_id:9,Bid:109,Bname:"Girl Frnd",cost:1560
}];
MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db){
    if(err){
        console.log(err);

    }
    var resultSet=db.collection('Book').insertMany(insertMany,function(err,result){
        if(err) throw err;
        else{
            console.log("document inserted successfully");
        }
        db.close();
    })
});

