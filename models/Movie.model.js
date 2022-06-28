// Iteration #5: The movie model
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  },
  cast: {
    type: Array
  }
});

const Movie = mongoose.model("Celebrity", movieSchema);
module.exports = Movie;
