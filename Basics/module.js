//Importing the people file modole for it to be accessed and to be used
// const getPeople = require('./people')

// console.log(getPeople)


// Use distructuring method to import more than one objects in a file ie {people,ages}

const {people, ages} = require('./people');

console.log(people, ages);