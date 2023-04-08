import Tour from "../models/Tour.js";

// create new tour
export const creataTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
};

// update tour
export const updateTour = async (req, res) => {

    const id = req.params.id;

    try {
        const updateTour = await Tour.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateTour,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update",
        });
    }
};

// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to delete",
        });
    }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id);

        res.status(200).json({
            success: true,
            message: "Successfully get single tour",
            data: tour,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

// getAll tour
export const getAllTour = async (req, res) => {
    
    //for pagination
    const page = parseInt(req.query.page);
    
    
    try {
        const tours = await Tour.find({});
        res.status(200).json({
            success: true,
            message: "Successfully",
            data: tours,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};