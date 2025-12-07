const marvelsHeros = ['thor', 'capton', 'strenge']
const indianHeros = ['shaktiman','krish','ra-one']

// I want to merge these two arrays

// console.log(marvelsHeros.push(indianHeros)) // it will return 4

// const allHeros = marvelsHeros.push(indianHeros)

// console.log(allHeros) // 4
// console.log(marvelsHeros) // [ 'thor', 'capton', 'strenge', [ 'shaktiman', 'krish', 'ra-one' ] ]

// so new array push to the 3rd element of original array and change the original array as well

// console.log(marvelsHeros[3][0]) // shaktiman
// console.log(marvelsHeros[3][1]) // krish

// sp push is not a idean case to merege two array

// concat method

// const allHeros =  marvelsHeros.concat(indianHeros)

// console.log(allHeros)   // [ 'thor', 'capton', 'strenge', 'shaktiman', 'krish', 'ra-one' ]
// console.log(marvelsHeros) // [ 'thor', 'capton', 'strenge' ]

// if we have multiple array to merge then this method good to use

// spread operator

// const newArrayWithSpread = [...marvelsHeros,...indianHeros]

// console.log(newArrayWithSpread)  // [ 'thor', 'capton', 'strenge', 'shaktiman', 'krish', 'ra-one' ]
// console.log(marvelsHeros)  // [ 'thor', 'capton', 'strenge' ]
// console.log(indianHeros)  //  [ 'shaktiman', 'krish', 'ra-one' ]

/**
 * push will change the original array 
 * concat will not change the original array
 * spread also not change the original array
 */


// multi-diamentional array into single array access

// const multiArray = [1,2,[3,4,['sushant', 'paikarao'], [true, 0]]] 

// console.log(multiArray) // // [ 1, 2, [ 3, 4, [ 'sushant', 'paikarao' ], [ true, 0 ] ] ]
// console.log(multiArray.flat(Infinity))    //[ 1, 2, 3, 4, 'sushant', 'paikarao', true, 0 ]
// .flat(provide depth of diamention array or infinte for all diamention)


// console.log(Array.isArray(marvelsHeros)) // true

// string into array
// const stringValue = 'sushant'

// console.log(Array.from(stringValue)) 
// [
//   's', 'u', 's',
//   'h', 'a', 'n',
//   't'
// ]

// array of

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)) //  100, 200, 300 ]
