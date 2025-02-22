// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// Iteration #6: Adding New Movies
router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render("movies/new-movie", { celebrity });
    })
    .catch((e) => console.log(e));
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then((movie) => res.redirect("/movies"))
    .catch((e) => console.log(e));
});

// Iteración #7: Listado de nuestras películas
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movie) => {
      console.log(`Este console es para la lista de movies completa`, movie);
      res.render("movies/movies.hbs", { movie });
    })
    .catch((e) => {
      next(e);
    });
});

// Iteración #8: La página de detalles de la película

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .populate("cast")
    .then((movie) => {
      console.log(movie);
      res.render("movies/movie-details.hbs", movie);
    })
    .catch((e) => console.log(e));
});

// Iteration #9: Deleting Movies

router.post("/movies/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  console.log("Console del Movie delete");

  Movie.findByIdAndRemove(id)
    .then(() => {
      console.log(`Movie, ${id},  eliminada correctamente`);
      res.redirect("/movies");
    })
    .catch((e) => console.log(e));
});

// Iteration #10: Editing Movies
router.get("/movies/:id/edit", (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      Celebrity.find()
        .then((celeb) => {
          console.log({ movie, celeb });
          res.render("movies/edit-movie.hbs", { movie, celeb });
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
});

router.post("/movies/:id/edit", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  const { id } = req.params;
  console.log(cast)
  Movie.findByIdAndUpdate(id, { title, genre, plot, cast })
    .then(() => res.redirect("/movies"))
    .catch((e) => {
      console.log(e);
      res.redirect("/movies");
    })
    .catch((e) => console.log(e));
});

module.exports = router;
