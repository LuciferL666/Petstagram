const router = require('express').Router() // 7. A

router.get('/', (req, res) =>{
    //console.log(req.user);
    res.render('home') //7. B
});

router.get('/404', (req, res)=>{ //23. A
    res.render('404'); //23. A
}); //23. A

module.exports = router