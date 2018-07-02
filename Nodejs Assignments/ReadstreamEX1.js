var fs=require('fs');
var info='';
//create readable stream
var readerStream=fs.createReadStream('Readstream1.txt');

//Handle stream Events-->data ,end,error
readerStream.on('data',function(chunk){
    info+=chunk;
});
readerStream.on('end',function(){
    console.log(info);

});
readerStream.on('error',function(){
    console.log(err);
});