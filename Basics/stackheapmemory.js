//1) stack memory 

/*
  primitive type variable stored  in stack memory in that you will gets a copy of valiable not its original
*/

let myValue = "Sushant"
let newVlaue = myValue; // assigned myValue to oldValue

// console.log(newVlaue === myValue) // true
newVlaue = 'Vicky' // updated newValue

console.log(`new value is ${newVlaue}`); // new value is Vicky
console.log(`old value is ${myValue}`); //old value is Sushant

let obj1 = {
    name: 'sushant',
    email: 'sushant@google.com'
}

let obj2 = obj1;

// console.log(obj1 === obj2)

obj2.name = 'vicky'

console.log(obj2);   // { name: 'vicky', email: 'sushant@google.com' }
console.log(obj1);  // { name: 'vicky', email: 'sushant@google.com' }
/*
  both object got changed.
  it is because refrence value got strored in heap memory and they shared the original value
*/


