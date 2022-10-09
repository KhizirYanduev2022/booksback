const {Router} = require('express')
const router = Router()
const {reviewController} = require('../controllers/review.controller')

router.get('/review', reviewController.createReview)
router.get('/review/books/:id', reviewController.finAllreview)


module.exports = router