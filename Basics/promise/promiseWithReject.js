const promiseOne = new Promise((res, rej)=>{
    // server call
    let serverCall = true;
    const user = {
        name:'sushant',
        lName: 'Paikarao'
    }
    setTimeout(()=>{
        console.log('promise one timer run')
    },1000)
    if(!serverCall){
        res(user)
    }else{
        rej('rejected')
    }
    
    // rej('rejected') // rejected is not call like that, it will call only we got some error

})

// consume promise now

promiseOne.then((res)=>{
    console.log('res is', res)
}).catch((err)=>{
    console.log('err is', err)
})

// ouput is

/**
 * err is rejected
   promise one timer run
 */