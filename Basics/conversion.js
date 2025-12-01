// let value = 25
// let value ="25"
let value ="25abc" // this value should not convert into Number, so be prompt


console.log(value)
console.log(typeof value)

let convertedValue = Number(value)
console.log('convertedValue',convertedValue)
console.log('convertedValue type',typeof convertedValue)