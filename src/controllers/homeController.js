const router = require('express').Router() // 7. A

const photoManager = require('../managers/photoManager'); // 35. A

router.get('/', (req, res) =>{
    //console.log(req.user);
    res.render('home') //7. B
});

router.get('/404', (req, res)=>{ //23. A
    res.render('404'); //23. A
}); //23. A

router.get('/profile', async (req, res) =>{ // 35. A
    const photos = await photoManager.getByOwner(req.user._id).lean(); // 35. A then in photoManager
res.render('profile' , { photos, photoCount: photos.length }); //35. A
}); //35. A

module.exports = router