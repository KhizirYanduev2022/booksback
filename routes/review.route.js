const {Router} = require('express')
const router = Router()
const {reviewController} = require('../controllers/review.controller')

router.post('/review', reviewController.createReview)
router.get('/review/books/:id', reviewController.finAllreview)
router.delete('/review/:id', reviewController.deleteReview)
router.get('/review', reviewController.findReview)


module.exports = router