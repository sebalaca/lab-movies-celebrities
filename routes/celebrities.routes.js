// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");


//Iteration #3: Adding New Celebrities 
router.get('/celebrities/create', (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
  });
router.post('/celebrities/create', (req, res, next) => {
    console.log(req.body);
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({
    name,
    occupation,
    catchPhrase
    })
    .then((response)=>{
    res.redirect("/celebrities")
    })
    .catch((e) => res.redirect("/celebrities/create"))
});

// Iteración #4: Listado de nuestras celebridades
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((response) => {
      console.log(`Este console es para la lista de celebridades completa`, response);
      res.render("celebrities/celebrities.hbs", {response});
    })
    .catch((e) => {
      next(e);
    });
  });








module.exports = router;