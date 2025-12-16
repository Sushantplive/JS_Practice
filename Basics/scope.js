function User(){
    let userName = 'sushant';
    console.log(this.userName) // undefined because this. some thing work only with Object not function
    console.log(userName)     // sushant
}

console.log(User())