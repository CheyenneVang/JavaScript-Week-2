// Initally created an array for each student
// const studentOne = ['John', 'Doe', 15];
// const studentTwo = ['Peter', 'Evans', 17];
// const studentThree = ['Steven', 'Adams', 18];

// console.log(`Hi my name is ` + studentOne[0] + ` ` + studentOne[1] + ` and I'm ` + studentOne[2] + ` years old.`);

// Put objects in an array
const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 15,
    },

    {
        firstName: 'Peter',
        lastName: 'Evans',
        age: 17,
    },

    {
        firstName: 'Steven',
        lastName: 'Adams',
        age: 18,
    }
];

console.log(`Hi my name is ` + students[1].firstName + ` ` + students[1].lastName + ` and I'm ` + students[1].age + ` years old.`);

// The dot operator . accesses the property from the object {} based on the the element's index inside of the array