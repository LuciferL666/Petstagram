//3 D
const router = require('express').Router();

//TODO: ADD CONTROLLER ROUTES
router.get('/', (req, res) =>{
    res.render('home') //6. E
});

module.exports = router