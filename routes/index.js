var express = require('express');
var router = express.Router();

//pg config
var pg = require('pg');
var conString = process.env.DATABASE_URL;


//Users
//get all
router.get('/api/v1/users', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM users', function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});
//get one
router.get('/api/v1/users/:id', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM users WHERE id = $1', [req.body], function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});
//insert one
router.post('/api/v1/users', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('INSERT INTO users(first_name, last_name) VALUES($1, $2) returning id', ['donald','trumpy'], function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
      //output: 1 
    });
  });
})

//Apartments
router.get('/api/v1/apartments', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM apartments', function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});

module.exports = router;
