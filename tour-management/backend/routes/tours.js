import express from 'express';
import { creataTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

const router = express.Router();

// create new tour
router.post('/', creataTour);

// update tour
router.put('/:id', updateTour);

// delete tour
router.delete('/:id', deleteTour);

// get single new tour
router.get('/:id', getSingleTour);

// get all tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

// get featured tours
router.get("/search/getFeaturedTours", getFeaturedTour);

// get tour count
router.get("/search/getTourCount", getTourCount);

export default router;