import { Router } from 'express';
import { getReviews } from './../controller/review.controller.js';

const router = Router();

router.get('/', (req,res) => {
    res.status(200).sendFile('./../public/reviews.html');
})
router.get('/api/reviews', getReviews);

export default router