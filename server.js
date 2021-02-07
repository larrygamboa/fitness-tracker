// Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Define PORT
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect mongdb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Import routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
