// merging the objects
const obj1 = {
    name:'sushant',
    lastName:'Paikarao'
}

const obj2 = {
    location:'pune'
}

const combineObj= Object.assign({},obj1,obj2);

// console.log(combineObj)
// if we have same keys

const obj3 = {
    name:'sushant',
    lname:'paikarao'
}

const obj4 = {
    name:'vicky',
    location:'pune'
}

// const object34 = Object.assign(obj3,obj4)
// console.log(object34)  
// { name: 'vicky', lname: 'paikarao', location: 'pune' }
// const newObjectWithSpread = {...obj3, ...obj4}
// console.log('====>',newObjectWithSpread)


/**
 * When we have two object with same keys, and try to merge then it it 
 * override keys of first object 
 */


