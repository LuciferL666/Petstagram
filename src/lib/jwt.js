const util = require('util'); //17. A
const jsonwebtoken = require('jsonwebtoken'); //17. A

const jwt = { //17. A
    sign: util.promisify(jsonwebtoken.sign), //17. A
    verify: util.promisify(jsonwebtoken.verify), //17. A
}; //17. A

module.exports = jwt;  //17. A