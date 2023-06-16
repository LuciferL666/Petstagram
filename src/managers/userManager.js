const bcrypt = require('bcrypt') //16. B

const jwt = require('../lib/jwt'); //17. B
const User = require('../models/User'); //11. A
// befor 17. B, after //20. D we move it in config.js const SECRET = '29df4dcf-579a-4647-8d07-748db7d60839';  //17. B (GENERATE SECRET FROM generate uuid)
const { SECRET } = require('../config/config') //20. D //20. F

exports.login = async (username, password) => { //11. A
                          //14. A
    //find user by username
const user = await User.findOne({ username }); //16. A


if(!user){
   throw new Error('Invalid username or password'); //16. A
}; //16. A

const isValid = await bcrypt.compare(password, user.password); //16. B
if(!isValid){ //16. B
   throw new Error('Invalid username or password'); //16. B
}; //16. B
const token = await generateToken(user) //25. A
return token
}; //11. A
                    
exports.register = async (userData) => {//11. A
const user = await User.findOne({username: userData. username}); //14. B
if(user){//10. C
    throw new Error('Username already exists'); //14. B
}//14. B
const createdUser = await User.create(userData);//25. A
//return User.create(userData) //14. B
const token = await generateToken(createdUser); //25. A
return token;
}//14. B
                              
async function generateToken(user){ //25. A
    const payload = { //17. B
        _id: user._id, //17. B
        username: user.username, //17. B
        email: user.email //17. B
    }; //17. B
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' }); //17. B
    return token;  //17. B
}//25. A