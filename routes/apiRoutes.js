// Necessary dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");

// Call workout data from API
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
  
// Create new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
  
// Populate workout to dashboard
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }]).sort({_id: -1}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Update workout data
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,{$push: {exercises:req.body}})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
  
module.exports = router;
