const mongoose =  require('mongoose'); //10. A

const userSchema = new mongoose.Schema({ //10. A
 username: { //10. A
    type: String,
    required: true,
 },
 password: { //10. A
    type: String,
    required: true,
 },
 email: { //10. A
    type: String,
    required: true,
 }
})//10. A

const User = mongoose.model('User', userSchema);//10. A

module.exports = User; //10. A