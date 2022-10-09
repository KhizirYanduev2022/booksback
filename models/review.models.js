const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: String,
    name: String,
    books:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Books'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review