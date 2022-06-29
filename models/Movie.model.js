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
    type: [ Schema.Types.ObjectId ],  //  llama datos de otro schema o BD
    ref: 'Celebrity'                  // referencia de donde se llama.
  }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
