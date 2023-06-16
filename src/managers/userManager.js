const User = require('../models/User'); //11. A

const bcrypt = require('bcrypt'); //16. B

exports.login = async (username, password) => { //11. A
                          //14. A
    //find user by username
const user = await User.findOne({ username }); //16. A
if(!user){
    throw new Error('Invalid user or password'); //16. A
}; //16. A
    //check password

const isValid = await bcrypt.compare(password, user.password); //16. B
if(!isValid){ //16. B
    throw new Error('Invalid user or password'); //16. B
}; //16. B
}; //11. A
                    
exports.register = async (userData) => {//11. A
const user = await User.findOne({username: userData. username}); //14. B
if(user){//10. C
    throw new Error('Username already exists')//14. B
}//14. B
return User.create(userData) //14. B
}//14. B
                              
