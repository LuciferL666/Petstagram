const router = require('express').Router(); //9. A

const userManager = require('../managers/userManager'); //11. B
const { TOKEN_KEY } =  require('../config/config') // 20. F

router.get('/login', (req, res) =>{//9. A
res.render('users/login') //9. C
}) //9. A

router.post('/login', async (req, res) =>{ //13. A
    const { username, password } =  req.body; //13. A

    const token =  await userManager.login(username, password); //13. A
      //17. B(const token)

      res.cookie(TOKEN_KEY, token); //18. B //20. F

    res.redirect('/'); //18. B
}) //13. A

router.get('/register', (req, res)=>{ //9. D
    res.render('users/register') //9. D
}) //9. D

router.post('/register', async(req, res)=>{ //13. A
    const {username, email, password, repeatPassword} = req.body //13. A

    await userManager.register({username, email, password, repeatPassword}); //13. A

    res.redirect('/users/login');  //18. B befor res.send(registered)
})

router.get('/logout', (req, res)=>{ //19. A
    res.clearCookie('token'); //19. A

    res.redirect('/'); //19. A
}); //19. A

module.exports = router; //9. A