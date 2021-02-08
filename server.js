// Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Define PORT
const PORT = process.env.PORT || 3000;

// const db = require("./models/workout.js");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect mongdb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false
});

// Import routes
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
