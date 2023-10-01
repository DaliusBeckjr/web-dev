const people = ['luigi', 'yoshi', 'bowser', 'peach'];
const ages = [12, 24, 33, 14];

// console.log(people); 


// for the array to show in the modules.js we need to export it into the file 
// thereafter myPeople will now have the values of the array of poeple.
// module.exports = people;

// but what if we have multiple values to export 
// then we can 
module.exports = {
    // we needed to add a value to the key and add that object people
    //  ex => people: people
    // but for now it will be 
    people, ages
}