// we want to import the people.js file into the modules.js using require
// const myPeople = require('./people');


// console.log(myPeople.people, myPeople.ages);
// key challenge how do we access one name inside of peoples
// console.log(myPeople.people[0], myPeople.ages[0]); output luigi 12


// or instead of a name property we can import the whole var
const { people, ages } = require('./people');

console.log(people, ages);

// comes with cor modules built into it 
const os = require('os');

console.log(os.platform(), os.homedir());