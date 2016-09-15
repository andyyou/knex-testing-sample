var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/shows', function (req, res, next) {
  queries.getAll()
    .then(function (shows) {
      res.status(200).json(shows)
    })
    .catch(function (err) {
      next(err)
    })
})

router.post('/shows', function (req, res, next) {
  queries.add(req.body)
    .then(function (showId) {
      return queries.getSingle(showId)
    })
    .then(function (show) {
      res.status(200).json(show)
    })
    .catch(function (err) {
      next(err)
    })
})

router.get('/shows/:id', function (req, res, next) {
  queries.getSingle(req.params.id)
    .then(function (show) {
      res.status(200).json(show)
    })
    .catch(function (err) {
      next(err)
    })
})

router.put('/shows/:id', function (req, res, next) {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    })
  }
  queries.update(req.params.id, req.body)
    .then(function () {
      return queries.getSingle(req.params.id)
    })
    .then(function (show) {
      res.status(200).json(show)
    })
    .catch(function (err) {
      next(err)
    })
})

router.delete('/shows/:id', function (req, res,  next) {
  queries.getSingle(req.params.id)
    .then(function (show) {
      queries.deleteShow(req.params.id)
        .then(function () {
          res.status(200).json(show)
        })
        .catch(function (err) {
          next(err)
        })
    })
    .catch(function (err) {
      next(err)
    })

})

module.exports = router;
