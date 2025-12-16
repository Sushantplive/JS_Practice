// objects creation 
/*
   object literal {}
   through constructor : object.create() -> singletone object
*/

const user = {
    name:'sushant',
    lname:'paikarao',
    location:'pune',
    'full name':'Sushant Paikarao'
}

// console.log(user)
// console.log(user.name)
// console.log(user['name'])
// console.log(user.full name) // not possible to access this way
// console.log(user["full name"])

// Define symbol in objects

const mySymbol = Symbol('MyKey1')
const newUser = {
    name:'sushant',
    mySymbol:'MyKey2',   // MyKey2 it work is a key only
    [mySymbol]:'MyKey3'
}

// console.log(newUser) //{ name: 'sushant', mySymbol: 'MyKey2', [Symbol(MyKey1)]: 'MyKey3' }
// console.log(newUser.mySymbol) // MyKey2. it work is a key only
// console.log(newUser[mySymbol]) // MyKey3

const newUser1 ={
     name:'sushant',
    lname:'paikarao',
    location:'pune',
    'full name':'Sushant Paikarao',
    getLastName: function(){
        console.log('I am last name')
    }
}


// Object.freeze(newUser1)/

newUser1.name='vicky' // it does not change name a s object is already freez

// console.log(newUser1) 

// newUser1.getLastName = function(){  // we cant add function to the newUser1 object once freez
//     console.log('I am last name')
// }

// console.log(newUser1)
// console.log(newUser1.getLastName())
/* {
  name: 'sushant',
  lname: 'paikarao',
  location: 'pune',
  'full name': 'Sushant Paikarao'
}*/


// merging two objects
const obj1 = {
    name: 'sushant',
    lname: 'paikarao'
}

const obj2 = obj1; 

console.log(obj1)
console.log(obj2)

obj2.name= 'vicky'

console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2) // true
console.log(Object.is(obj1,obj2)) // true
/**
 * when we change obj 2 values then it also change the original obj value because they both share the same refrence
 * all non-primitive share the same refrence
 */



