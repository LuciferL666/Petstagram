//27. A
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],  // 28. B
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],  // 28. B
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],  // 28. B
    },
    description: {
        type: String,
        required: [true, 'Description is required'],  // 28. B
    },
    location: {
        type: String,
        required: [true, 'Location is required'], // 28. B
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
//27. A