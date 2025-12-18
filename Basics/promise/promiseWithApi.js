const promiseOne = new Promise((resolve, reject) => {
    // server call
    const responce = fetch('https://jsonplaceholder.typicode.com/users/1')
    console.log(responce)
    try{
        if(!responce.ok){
            reject(`http error! status : `, responce.status);
            return;
        }
        const data =  responce.json()
        console.log(data)
        resolve(data)
    }catch(error){
        reject(error.message || 'something went wrong')
    }
})

// consume the promise now with asyanc and await

async function consumePromiseApi() {
    console.log('consuming the promise..')
    try {
        const result = await promiseOne;
        console.log('result is', result)

    } catch (err) {
        console.log('err', err)
    }

}

consumePromiseApi()