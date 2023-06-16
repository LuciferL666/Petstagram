const {getErrorMessage} = require('../utils/errorHelpers') // 24. C

exports.errorHandler = (err, req, res) =>{ // 23. C
    res.render('/404', {error: getErrorMessage(err)}) // 24. C 
} // 23. C