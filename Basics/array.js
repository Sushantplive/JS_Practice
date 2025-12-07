const array = ['sushant', 36, true]
// console.log(array);  // [ 'sushant', 36, true ]

let array1= new  Array('sushant', 'pakarao', 36) 
// console.log(array1) // [ 'sushant', 'pakarao', 36 ]

// now update some value in original array

const originalArray = ['sushant', 'paikarao', 30]

const newArray = originalArray;
// newArray[0] = 'Vicky';
// console.log('newArray is', newArray )        // newArray is [ 'Vicky', 'paikarao', 30 ]
// console.log('original array', originalArray) // original array [ 'Vicky', 'paikarao', 30 ]

/**
 * so when we copy original array to another array and when we change another array then its 
 * original array also got change, 
 * this is because it share the same refrence which is called shallow copy
 */

// console.log(originalArray.push(5))  // 4 . push item to last and return length of element
// console.log(originalArray) //  [ 'Vicky', 'paikarao', 30, 5 ]
// console.log(originalArray.push('')) // 4 
// console.log(originalArray) // [ 'Vicky', 'paikarao', 30, '' ]

// console.log(originalArray.pop()) // 30 remove last element and return removed element 
// console.log(originalArray) // [ 'Vicky', 'paikarao' ]

// console.log(originalArray.unshift(5)) // 4, add element to zero index and return lenght of array
// console.log(originalArray)    // [ 5, 'Vicky', 'paikarao', 30 ]

// console.log(originalArray.shift()) // vicky , remove zero index element and return removed elemen t
// console.log(originalArray) // [ 'paikarao', 30 ]

// console.log(originalArray.includes('sushant')) // true , find the element and return boolean

// console.log(originalArray.indexOf(30)) // 2, it gives the index of element

// console.log(originalArray.join(), typeof originalArray.join()) // sushant,paikarao,30 string
  
const newArray1 = [1,2,3,5,8,10]
               //  0,1,2,3,4,5
// const newArrayForSlice =  newArray1.slice(1,3);              
// console.log(newArrayForSlice)   // [ 2, 3 ]
// console.log(newArray1)          // [ 1, 2, 3, 5, 8, 10 ]
// slice(start, end)
// does not change original array

const newArrayforSplice = newArray1.splice(1,3);

console.log(newArrayforSplice);   // [ 2, 3, 5 ]
console.log(newArrayforSplice);   // [ 2, 3, 5 ]
// splice change the origina array as well

/**
 * 
 */









