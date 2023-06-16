const router = require('express').Router(); //9. A

const userManager = require('../managers/userManager'); //11. B
const { TOKEN_KEY } =  require('../config/config') // 20. F
const {getErrorMessage} =  require('../utils/errorHelpers'); //24. D


router.get('/login', (req, res) =>{//9. A
res.render('users/login') //9. C
}) //9. A

router.post('/login', async (req, res) =>{ //13. A
    const { username, password } =  req.body; //13. A

    try {
        const token =  await userManager.login(username, password); //13. A
        //17. B(const token)
  
        res.cookie(TOKEN_KEY, token); //18. B //20. F
  
      res.redirect('/'); //18. B
    } catch (err){
        res.render('users/login', {error: getErrorMessage(err)})
    }

}) //13. A

router.get('/register', (req, res)=>{ //9. D
    res.render('users/register') //9. D
}) //9. D

router.post('/register', async(req, res)=>{ //13. A
    const {username, email, password, repeatPassword} = req.body //13. A

    try { //24. D
        const token = await userManager.register({username, email, password, repeatPassword}); //13. A //25. A( add const token)
        
        res.cookie(TOKEN_KEY, token)//25. A
        res.redirect('/');  //18. B befor res.send(registered) //25. A('/')
    }catch (err) { //24. D
res.render('users/register', { error: getErrorMessage(err), username, email }); //24. D //26. A
    }
});

router.get('/logout', (req, res)=>{ //19. A
    res.clearCookie('token'); //19. A

    res.redirect('/'); //19. A
}); //19. A

module.exports = router; //9. A