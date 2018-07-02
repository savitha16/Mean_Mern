var fs=require('fs');
//create readable sream
var readerStream=fs.createReadStream('Readstream1.txt');
//create writablestream
var writerStream=fs.createWriteStream('ReadWrite.txt');
//pipe read write operations
//read Readstream1.txt and ReadWrite.txt 
readerStream.pipe(writerStream);
console.log("pgnm ended")