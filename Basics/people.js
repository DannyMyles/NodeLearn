// Exporting a single file
const people = ['James', 'John', 'Silas', 'Olu', 'Ndegway', 'Charlot']
const ages = [20,23,21,44,59]

// console.log(people)

//Exporting the people file to the modules file
// module.exports = people


// Exporting multiple variables to the modules file
module.exports = {
      people,ages
};