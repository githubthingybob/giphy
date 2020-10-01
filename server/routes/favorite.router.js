const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "favorite"';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing GET favorite query', err);
      res.sendStatus(500);
    });
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFavorite= req.body;
  const queryText = `INSERT INTO "favorite" ("name", "category", "url")
                    VALUES ($1, $2)`;
  const queryValues = [newFavorite.name, newFavorite.category, newFavorite.url];
  pool.query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error completing POST favorite query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const updatedFavorite = req.body;

  const queryText = `UPDATE "favorite"
  SET "name" = $1, 
  "category" = $2,
  "url" = $3`;

  const queryValues = [
    updatedFavorite.name,
    updatedFavorite.category,
    updatedFavorite.url
  ];

  pool.query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing PUT query', err);
      res.sendStatus(500);
    });
});


// delete a favorite
router.delete('/:favId', (req, res) => {
  const queryText = 'DELETE FROM "favorite" WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing DELETE favorite query', err);
      res.sendStatus(500);
    });
});


module.exports = router;
