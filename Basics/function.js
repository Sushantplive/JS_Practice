function addTwoNumber(){
    console.log(10+20)
    // return 10+20;
}

// console.log(addTwoNumber) // 30

// const result = addTwoNumber()
// console.log(result) // undefined because we are not returning

function sayHi(uName){
    if(!uName) return; // we are restricting to priniting undefined values;
console.log(`hi ${uName}`)
}

// console.log(sayHi('sushant'))

const result1 = sayHi()
// console.log('------>', result1) // hi undefined, this is withought if(!uName) return;


 // return with ... operator

 function add(...num){
    return num;
 }

//  const result = add(100,200,200)
// console.log(result); // [ 100, 200, 200 ]s

// iife function
// this is a named iife function
//() defination
//() to end the execution
// (function calculate(){
//     console.log('run iife function')
// })()

// (()=>{
//     console.log('unnamed iffe function')
// })()

// paramaterized iffe

((name)=>{
console.log(name)
})('sushant')