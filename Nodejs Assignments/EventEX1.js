var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('sayHi',function(){
    console.log("saviiiii");
});
eventEmitter.on('sayHello',function(){
    console.log('sruuuuu');
});
console.log("Before sayHi");
eventEmitter.emit('sayHi');
console.log("After sayHi");
console.log("Before sayHello");

eventEmitter.emit('sayHello');
console.log("After sayHello");





