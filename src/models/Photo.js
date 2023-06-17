//27. A
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],  // 28. B only Name is required
        minLength: [2, 'Name should be at least 2 characters']
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],  // 28. B ImageUrl is required
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],  // 28. B Age is required
        min: 1,
        max: 100,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],  // 28. B Description is required
        minLength: 5,
        maxLength: 50,
    },
    location: {
        type: String,
        required: [true, 'Location is required'], // 28. B Location is required
        minLength: 5,
        maxLength: 50,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [ //34. A
        { //34. A
            user: { //34. A
              type: mongoose.Types.ObjectId, //34. A
              required: true, //34. A
              ref: 'User', //34. A
            }, //34. A
            message: { //34. A
                type: String, //34. A
                required: [true, 'Comment message is required'], //34. A
            }, //34. A
        } //34. A
    ] //34. A
}); //34. A after go in  details.hbs
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
//27. A