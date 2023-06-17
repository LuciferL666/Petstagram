const router = require('express').Router(); //3 D

const homeController = require('./controllers/homeController') //7. B
const userController = require('./controllers/userController') //9. B
const photoController = require('./controllers/photoController') // 28. B

router.use(homeController); //7. B
router.use('/users', userController);//9. B
router.use('/photos', photoController)  // 28. B
// router.get('*', (req, res) =>{ //23. A
//     res.redirect('/404') //23. A
// }); //23. A

module.exports = router; //3 D