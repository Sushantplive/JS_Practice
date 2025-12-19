console.log(this)  // {} empty object which is object literal

const user = {
    name: 'Sushant',
    lName: 'Paikarao',
    location: 'pune',
    getName: function () {
        console.log('Name in function', this.name) // Sushant
        console.log(this)
        // output of this is
        // {
        //   name: 'Sushant',
        //   lName: 'Paikarao',
        //   location: 'pune',
        //   getName: [Function: getName]
        // }
    }
}

console.log('user is', user)
// console.log('name is', user.name) // name is sushant
console.log(user.getName())
// output is
/**
 * user is {
  name: 'Sushant',
  lName: 'Paikarao',
  location: 'pune',
  getName: [Function: getName]
}
 */