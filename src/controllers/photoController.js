const router = require('express').Router();//28. A

const photoManager = require('../managers/photoManager')  // 28. B
const { getErrorMessage } = require('../utils/errorHelpers'); // 28. B

router.get('/', async (req, res)=>{ //29. A
    const photos = await photoManager.getAll().lean(); // 29. B,  GO IN photoManager.js
res.render('photos', { photos }); //29. B 
}); //29. A


router.get('/create', (req, res)=>{//28. A
res.render('photos/create'); //28. A
});//28. A

router.post('/create', async(req, res)=>{  // 28. B
    const photoData = {// 28. B
        ...req.body, // 28. B
        owner: req.user._id, // 28. B
    } // 28. B

    try{ // 28. B
    await photoManager.create(photoData); // 28. B

    res.redirect('/photos') // 28. B
}catch(err){  // 28. B
res.render('photos/create', {error: getErrorMessage(err)}); // 28. B
} // 28. B

}); // 28. B

router.get('/:photoId/details', async (req, res) =>{ //31. A
const photoId = req.params.photoId; //31. A
const photo = await photoManager.getOne(photoId).lean(); //31. A
const isOwner = req.user._id == photo.owner._id; // 31. C.

res.render('photos/details', { photo, isOwner }) //31. A // 31. C
}); //31. A


module.exports = router; //28. A