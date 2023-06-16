const bcrypt = require('bcrypt'); //16. B

const jwt = require('../lib/jwt'); //17. B
const User = require('../models/User'); //11. A
const SECRET = '29df4dcf-579a-4647-8d07-748db7d60839'  //17. B (GENERATE SECRET FROM generate uuid)


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
const payload = { //17. B
    _id: user._id, //17. B
    username: user.username, //17. B
    email: user.email, //17. B
} //17. B
const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' }); //17. B
return token;  //17. B
}; //11. A
                    
exports.register = async (userData) => {//11. A
const user = await User.findOne({username: userData. username}); //14. B
if(user){//10. C
    throw new Error('Username already exists')//14. B
}//14. B
return User.create(userData) //14. B
}//14. B
                              
