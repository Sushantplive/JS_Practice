function setUserName(userName){
    // this will return thr userName
    console.log(userName) // it will print sushant
    return this.userName
}

function createUser(userName,userId, userPwd){
    // this will set the propertied with the help of this
    // this.userName =  userName; // we want userName should be take from setUserName
    // this.setUserName(userName) // TypeError: this.setUserName is not a function
    //this.userName= setUserName(userName) // this way it is work as we bind with this keyword
    setUserName.call(this, userName)
    this.userId = userId;
    this.userPwd= userPwd;
    // return this;
}

const userOne = new createUser('Sushant','26358',12345)

console.log(userOne)

/**
 * output is 
 * Sushant
 * createUser { userId: '26358', userPwd: 12345 }
 */
/**
 * we have not call setUserName with this so try with this
 */

