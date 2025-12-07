// symbol

const value1 = Symbol('123') 
const value2 = Symbol('123')

// console.log(value1 === value2); // o/p is false because both are unique

// console.log(typeof value1) // o/p Symbol

// refrence datatype

const array = ['sushant', 'sush@gmail.com', 30]

// console.log(typeof array) // o/p object

const newObj = {
    name:'sushant',
    email:'sush@gmail.com',
    agr:30
}

// console.log(typeof newObj)  // o/p object

const myFunction = function(params) {
    console.log('my function')
}


console.log(myFunction, typeof myFunction) // o/p function
