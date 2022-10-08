const {Router} = require('express')
const {booksController} = require('../controllers/books.controller')
const router = Router()


router.post('/books', booksController.createBooks)
router.delete('/books/:id',booksController.deleteBooks)
router.put('/books/:id',booksController.updateBooks)
router.get('/books/:id',booksController.findBooks)
router.get('/books',booksController.findAllBooks)

module.exports = router