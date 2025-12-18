const promiseOne = new Promise(function (resolve, reject) {
    // server call
    // let serverFlag = false;
    let serverFlag = true;// to run reject part
    const user = {
        name: 'sushant',
        email: 'sushant@google.com'
    }
    if (!serverFlag) {
        resolve(user)
    } else {
        reject('Rejected')
    }
})

// now consume this promise with async and await
// so we need to write a async function and take promise as await

// async function comsumePromiseOne(){
//     console.log('consuming the promiseOne...')
//     const result = await promiseOne;//await promiseOne() dont pass this as function as Promise is A Object
//     console.log('result is', result)
// }

async function comsumePromiseOne() {
    console.log('consuming the promiseOne...')
    try {
        const result = await promiseOne;//await promiseOne() dont pass this as function as Promise is A Object
        console.log('result is', result)
    } catch (err) {
        console.log('err is', err)
    }

}

comsumePromiseOne();

/**
 * This is the positive case
 * output is,
 * consuming the promiseOne...
 * result is { name: 'sushant', email: 'sushant@google.com' }
 * 
 */
/**
 * for negative case we need to reject and accordingly we need to catch but in case of
 * async and await catch block cant be handle so we need to put 
 * our logic in try catch block
 */
/**
 * output in case of reject.
 * consuming the promiseOne...
 * err is Rejected
 */