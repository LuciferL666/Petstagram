const router = require('express').Router(); //3 D

const homeController = require('./controllers/homeController') //7. B
const userController = require('./controllers/userController') //9. B

router.use(homeController); //7. B
router.use('/users', userController);//9. B

module.exports = router; //3 D