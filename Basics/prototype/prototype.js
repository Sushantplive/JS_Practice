function User(userName, emailId, location){
    //packed your data with this keyword
    this.userName = userName;
    this.emailId = emailId;
    this.getLocation = function(){
        return this.location = location
    }
    getName = function(){
        return userName
    } // in case of construction function it not accessible because this is missing
    // we need to add method aslo with this keyword then only we can see it in console
    return this;
}

// create object now

const userOne = new User('sushant', 'sush@google.com', 'pune');

console.log(userOne)
console.log(userOne.getLocation()) // gives error, we need to return this from method then only it will show

/**
 * User {
  userName: 'sushant',
  emailId: 'sush@google.com',
  getLocation: [Function (anonymous)]
}
pune

 */
// console.log(User.getLocation()) // error
// console.log(User.getName()) // error
 // because we can access properties and methos though instance and that to this should be attache in constructoe obje
 

/**
 * User {
  userName: 'sushant',
  emailId: 'sush@google.com',
  getLocation: [Function (anonymous)]
}
 */

// now add a method in UserOne
