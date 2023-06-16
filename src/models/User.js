const mongoose = require("mongoose"); //10. A
const bcrypt = require("bcrypt"); //15. A

const userSchema = new mongoose.Schema({ //10. A
  username: { //10. A
    type: String,
    required: true,
    unique: true, //10. B
  },
  password: { //10. A
    type: String,
    required: true,
  },
  email: { //10. A
    type: String,
    required: true,
  },
}); //10. A

userSchema
  .virtual("repeatPassword") //10. C
  .set(function (value) {//10. C
    
    if (this.password !== value) {//10. C
      
      throw new Error("Password missmatch!"); //10. C
    } //10. C
  }); //10. C

userSchema.pre("save", async function () { //15. A
 
  const hash = await bcrypt.hash(this.password, 10); //15. A

  this.password = hash; //15. A
}); //15. A

const User = mongoose.model("User", userSchema); //10. A

module.exports = User; //10. A
