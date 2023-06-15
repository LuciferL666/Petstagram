const router = require('express').Router() // 7. A

router.get('/', (req, res) =>{
    res.render('home') //7. B
});

module.exports = router