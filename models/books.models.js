const mongoose = require('mongoose')
const booksSchema = mongoose.Schema({
 name: String,
 author: String,
 genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'genre'
 }
})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books
