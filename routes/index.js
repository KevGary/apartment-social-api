var express = require('express');
var router = express.Router();

//pg config
var pg = require('pg');
var conString = process.env.DATABASE_URL;


//Users
//get all
router.get('/users', function(req, res, next) {
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
//insert user
router.post('/users', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('INSERT INTO users(first_name, last_name) VALUES($1, $2) returning id', [req.body.data.attributes.first_name,req.body.data.attributes.last_name], function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
      //output: 1 
    });
  });
})
//get one
router.get('/users/:id', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM users WHERE id = $1', [req.params.id], function(err, result) {
      done();
      console.log(req.params.id)
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});

//Apartments
//get all
router.get('/apartments', function(req, res, next) {
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
//insert apartment
router.post('/apartments', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('INSERT INTO apartments(name, apartment_number, street_address, city, state, zip_code) VALUES($1, $2, $3, $4, $5, $6) returning id', 
      [req.body.data.attributes.name, req.body.data.attributes.apartment_number, req.body.data.attributes.street_address, req.body.data.attributes.city, req.body.data.attributes.state,
      req.body.data.attributes.zip_code], function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
      //output: 1 
    });
  });
})
//get one
router.get('/apartments/:id', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM apartments WHERE id = $1', [req.params.id], function(err, result) {
      done();
      console.log(req.params.id)
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});

//Leases
//get all
router.get('/leases', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM leases', function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});

//Messages
//get all
router.get('/messages', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM messages', function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});
//insert message
router.post('/messages', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('INSERT INTO messages(content, timestamp) VALUES($1, $2) returning id', [req.body.data.attributes.content, req.body.data.attributes.timestamp], function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
      //output: 1 
    });
  });
})
//get one
router.get('/messages/:id', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM messages WHERE id = $1', [req.params.id], function(err, result) {
      done();
      console.log(req.params.id)
      if (err) {
        return console.error('error running query', err);
      }
       res.send(result);
    });
  });
});

module.exports = router;
