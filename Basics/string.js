// there are two way to decalre string value
// 1) let value = 'sushant' // direct with quotes
// 2) let value = new String('sushant') // with String object

const valueOne = 'sushant'
console.log(valueOne, typeof valueOne) // sushant string
console.dir(valueOne, typeof valueOne) // sushant string

const valueTwo = new String('sushant');

console.log(valueTwo) // [String: 'sushant']
// console.dir(valueTwo) // [String: 'sushant']
// console.info(valueTwo) // [String: 'sushant']