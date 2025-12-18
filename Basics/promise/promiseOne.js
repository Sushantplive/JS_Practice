/**
 * A promise in JavaScript is like a placeholder for a value that might not be ready yet.
 * it is a object that represent a result of asynchronous operation like fetching data from server
 * promise has three stage
 * 1) pending 2)fullfilled 3) reject
 */
const promiseOne =  new Promise(function(resolve, reject){
    // confugure async call like server call, for now we will ad async fun with setTimeout fun
    setTimeout(function(){
        console.log('promise1  setTimeout run 1000 ms')
    },1000)
     resolve() 
     /**
      * as we are not passing anything so initially it console as undefined as console is 
        running synchronously.
      * If we dont resolve it then we cant consume the promise and we get status as pending
      */
})

// consume the promise now

promiseOne.then(function(){
    console.log('Promise1 has been consume now')
})

// console.log('promise one',promiseOne) 

// other way is

const promiseTwo = new Promise(function(resolve,reject){
    // setup db server call
    setTimeout(function(){
        console.log('promise 2 second timeout call after 1 ms')
    },1000)
    resolve();
})

promiseTwo.then(function(){
    console.log('promise 2 hs been consume now')
})
// console.log('promise two',promiseTwo)

// o/p :
// Promise1 has been consume now
// promise 2 hs been consume now
// promise1  setTimeout run 1000 ms
// promise 2 second timeout call after 1 ms


