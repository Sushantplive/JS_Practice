const promiseOne = new Promise((res, rej)=>{
    // server call
    let serverCall = false;
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
    console.log('res is', res.name)
}).catch((err)=>{
    console.log('err is', err)
}).finally(()=>{
    console.log('this block run everytime')
})

// ouput is

/**
 * err is rejected
   promise one timer run
----------------------------
err is rejected
this block run everytime
promise one timer run

 */