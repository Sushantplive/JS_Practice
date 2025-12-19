// new keyword allow us to create multiple instances

// new keywotd create a empty object {}
// constructor fun will get call 
// argument will by with the help of this keyword
// you will get excat data
// create object

function User(uName, lName){
    this.uName = uName;
    this.lName = lName;
    return this;
}

const userOne = User('sushant', 'paikarao');

// console.log(userOne)
// create other object

const userTwo = User('vicky', 'paikarao')

console.log(userOne)
console.log(userTwo)

console.log(userOne === userTwo) // true
// so it will change the old ibject also because they are sharing the same refrence.

// now create object with new keyword

function UserDetails(userName, location){
    this.userName= userName;
    this.location=location;
    return this;
}

// create object with new keyword

const UserDetailsOne = new UserDetails('sush','pune')
const UserDetailsTwo = new UserDetails('vivky', 'mumbai')

// console.log(UserDetailsOne)
// console.log(UserDetailsTwo)
// console.log(UserDetailsOne === UserDetailsTwo) // FALSE
/**
 * UserDetails { userName: 'sush', location: 'pune' }
   UserDetails { userName: 'vivky', location: 'mumbai' }
 */
// now old/ first object values are not changed