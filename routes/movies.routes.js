// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model")


// Iteration #6: Adding New Movies
router.get('/movies/create', (req, res) => {
    Celebrity
        .find()
        .then(celebrity => {
            res.render('movies/new-movie', { celebrity })
        })
        .catch(e => console.log(e))

})

router.post('/movies/create', (req, res) => {
    const { title, genre, plot, cast } = req.body
    Movie
        .create({ title, genre, plot, cast })
        .then(movie => res.redirect('/movies'))
        .catch(e => console.log(e))
})

// Iteración #7: Listado de nuestras películas
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movie) => {
      console.log(`Este console es para la lista de movies completa`, movie);
      res.render("movies/movies.hbs", {movie});
    })
    .catch((e) => {
      next(e);
    });
  });

// Iteración #8: La página de detalles de la película

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
  .populate('cast')
  .then((movie) => {
    console.log(movie)
      res.render("movies/movie-details.hbs", movie)
  })
  .catch((e) => console.log(e));
})

module.exports = router;