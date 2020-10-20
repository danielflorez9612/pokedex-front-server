var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/pokemon", function (req, res, next) {
  request.get('http://35.192.126.172:8080/pokemon?offset='+req.query.offset+"&limit="+req.query.limit, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      res.send(body)
    }
  })
})
router.get("/api/pokemon/:name", function (req, res, next) {
  request.get('http://35.192.126.172:8080/pokemon/'+req.params.name, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      res.send(body)
    }
  })
})
module.exports = router;
