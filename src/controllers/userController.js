const router = require('express').Router(); //9. A

const userManager = require('../managers/userManager'); //11. B

router.get('/login', (req, res) =>{//9. A
res.render('users/login') //9. C
}) //9. A

router.post('/login', async(req, res) =>{ //13. A
    const { usename, password } =  req.body; //13. A

    const token =  await userManager.login(usename, password); //13. A
      //17. B(const token)
    res.send('Logged in')
}) //13. A

router.get('/register', (req, res)=>{ //9. D
    res.render('users/register') //9. D
}) //9. D

router.post('/register', async(req, res)=>{ //13. A
    const {username, email, password, repeatPassword} = req.body //13. A

    await userManager.register({username, email, password, repeatPassword}); //13. A

    res.send('Registered')
})

module.exports = router; //9. A