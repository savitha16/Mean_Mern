var MongoClient=require('mongodb').MongoClient;
var findQuery={_id:2};
MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db){
    if(err)
    {
        console.log(err);
    }
    var mysort={Bname:1};
    db.collection('Book').find({},{_id:0,Bname:1}).sort(mysort).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
    })
    db.close();
});