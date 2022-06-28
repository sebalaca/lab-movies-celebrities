// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");



// Iteration #6: Adding New Movies
router.get('/movies/create', (req, res, next) => {
    res.render("movies/new-movie.hbs")
  });
router.post('/movies/create', (req, res, next) => {
    console.log(req.body);
    const { title, genre, plot, cast } = req.body;

    Movie.create({
    title, 
    genre, 
    plot, 
    cast
    })
    .then((response)=>{
    res.redirect("/movies")
    })
    .catch((e) => res.redirect("/movies/create"))
});


module.exports = router;