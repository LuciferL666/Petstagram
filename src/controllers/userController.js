const router = require('express').Router() //9. A

router.get('/login', (req, res) =>{//9. A
res.render('users/login') //9. C
}) //9. A

module.exports = router; //9. A