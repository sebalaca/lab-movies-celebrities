// Iteration #5: The movie model
const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const movieSchema = new Schema({
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
    type: [ Schema.Types.ObjectId ],
    ref: 'Celebrity'
  }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
