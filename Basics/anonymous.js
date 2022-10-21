
console.log(__dirname);
console.log(__filename);


function printStuff(){
      console.log('This was timedout');

}
setTimeout(printStuff,3000)
// setInterval(printStuff,3000)