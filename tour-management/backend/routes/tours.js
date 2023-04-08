import express from 'express';
import { creataTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js';

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


export default router;