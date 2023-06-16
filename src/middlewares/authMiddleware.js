const jwt = require('../lib/jwt');

const { SECRET, TOKEN_KEY } = require('../config/config'); //20. D // 20. F

exports.auth = async (req, res, next) =>{ //20. A
const token = req.cookies[TOKEN_KEY]; //20. C //20. F

if(token){  //20. C
try {
const decodedToken = await jwt.verify(token, SECRET);  //20. D
req.user = decodedToken;  //20. E
 next();
} catch (err){
res.clearCookie(TOKEN_KEY); //20. F

res.redirect('/users/login') //20. F
}
}else{  //20. C
  next(); //20. C
} //20. C
} //20. A 