const router = require('express').Router() //9. A

router.get('/login', (req, res) =>{//9. A
res.render('users/login') //9. C
}) //9. A

router.get('/register', (req, res)=>{ //9. D
    res.render('users/register') //9. D
}) //9. D

module.exports = router; //9. A