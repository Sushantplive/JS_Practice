// let value = 25
//let value ="25" // string will be converted into number
let value ="25abc" // this value should not convert into Number, so be prompt


console.log('origin value is',value)
console.log('origin value type is', typeof value)

let convertedValue = Number(value) // convert this value to number
console.log('convertedValue is',convertedValue)
console.log('convertedValue type is',typeof convertedValue)
// console.log('NaN type is',typeof NaN) --> number 