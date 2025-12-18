const promiseOne = new Promise(function(resolve, reject){
    // asynchronous call like server call
    const user = {
        name:'sushant',
        lName:'paikarao'
    }
    setTimeout(function(){
        console.log('promiseOne setTimeout call')
    },2000)
    resolve(user)
})

promiseOne.then(function(res){
    console.log(`Promise 1 consume and resulet is`, res) 
    // WILL GET OUT AS Promise 1 consume and resulet is [Object,Object]
})
