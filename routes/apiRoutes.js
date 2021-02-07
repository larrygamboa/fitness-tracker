// Necessary dependencies
const router = require("express").Router();
const db = require("../models");

// 
router.get("/api/workouts", (req, res) => {
    // getNotes()
    //     .then((notes) => {
    //         res.json(notes);
    // })
    // .catch(err => {
    //     res.json(err);
    // });
});
  
// 
router.post("/api/workouts", (req, res) => {
    // addNote(req.body)
    //     .then((note) => {
    //         res.json(note);
    // })
    // .catch((error) => {
    //     res.status(500).json(error);
    // });
});
  
// 
router.get("/api/workouts/range", (req, res) => {
    // getNotes()
    //     .then((notes) => {
    //         res.json(notes);
    // })
    // .catch(err => {
    //     res.json(err);
    // });
});

// 
router.post("/api/workouts/:id", (req, res) => {
    // addNote(req.body)
    //     .then((note) => {
    //         res.json(note);
    // })
    // .catch((error) => {
    //     res.status(500).json(error);
    // });
});
  
module.exports = router;
