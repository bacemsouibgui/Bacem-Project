const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String

    },

    description: {
        type: String
    }
});

module.exports = Category = mongoose.model('category', categorySchema)
