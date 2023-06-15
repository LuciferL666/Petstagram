const router = require('express').Router(); //3 D

const homeController = require('./controllers/homeController') //7. B

router.use(homeController); //7. B

module.exports = router; //3 D