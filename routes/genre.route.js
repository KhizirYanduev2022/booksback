const {Router} = require('express')
const router = Router()
const {genreController} = require('../controllers/genre.controller')


router.get('/genre', genreController.genreCreating)
router.delete('/genre/:id', genreController.deleteGenre)
router.post('/genre',genreController.findGenres)


module.exports = router