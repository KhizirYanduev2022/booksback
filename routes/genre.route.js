const {Router} = require('express')
const router = Router()
const {genreController} = require('../controllers/genre.controller')


router.get('/genre', genreController.genreCreate)


module.exports = router