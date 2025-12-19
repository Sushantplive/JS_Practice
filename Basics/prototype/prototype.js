function User(name,age){
    this.name= name;
    this.age=age;
    return this;
};

// const userOne = new User('Sushant', 30)

// now I want to add method in UserOne to combine this name and age

User.prototype.printMe = function(){
    console.log(`name is ${this.name} and age is ${this.age}`)
};

// now we have added a increase mehtod to User function, now create object instances

const userOne = new User('sushant', 32);

console.log(userOne)
console.log(userOne.printMe())

/**
 * User { name: 'sushant', age: 32 }
 * name is sushant and age is 32
 */
const userTwo = new User('Vicky', 25)

console.log(userTwo)
console.log(userTwo.printMe())

// so for every instances methos is available