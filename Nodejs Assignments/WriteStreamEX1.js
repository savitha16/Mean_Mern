var fs=require('fs');
var info='Mean Mern Stack Traing';

//create a writable stream
var writerSream=fs.createWriteStream('writestream1.txt');
//write data to sream
writerSream.write(info);
//mark the end file
writerSream.end();
//handle sream events-->finish,error
writerSream.on('finish',function(){
    console.log("write completed");
});
writerSream.on('error',function(){
    console.log(err.stack)
});
console.log("program ended");