const Photo = require('../models/Photo') // 28. B

exports.getAll = () => Photo.find().populate('owner'); //29. B //30

exports.getOne = (photoId) => Photo.findById(photoId).populate('owner'); //31. A

exports.create = (photoData) => Photo.create(photoData) // 28. B

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId); //32. A

exports.edit = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData); // 33. A

exports.addComment = async (photoId, commentData) => { //34. A
    const photo = await Photo.findById(photoId); //34. A

    photo.comments.push(commentData); //34. A

    return photo.save()
}; //34. A