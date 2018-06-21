var express = require('express');
var request = require("request");
const key = require('../config/keys_prod');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/movies/:id', function(req, res, next) {
  var id = req.params.id;

  request ({url: `https://api.themoviedb.org/3/movie/${id}?api_key=${key.api}&languag=en-US`,
        json:true}, function(err, res1, body){
          if(!err && res.statusCode ==200){

              res.render('movieDetails.ejs', {movie : body});
          } else {
            console.log("Oops...! Something Went Wrong. Pls Try Again.");
          }
        });
});

module.exports = router;
