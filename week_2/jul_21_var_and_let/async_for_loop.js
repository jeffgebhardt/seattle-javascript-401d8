for(var i = 0; i < 10; i++) 
  process.nextTick(() => console.log(i));

console.log('after: ' + i);
