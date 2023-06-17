const Photo = require('../models/Photo') // 28. B

exports.getAll = () => Photo.find().populate('owner'); //29. B //30

exports.create = (photoData) => Photo.create(photoData) // 28. B