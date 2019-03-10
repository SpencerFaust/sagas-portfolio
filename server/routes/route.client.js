const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  pool.query('SELECT * FROM projects')
    .then((result) => { 
      console.log('DB response:', result.rows);
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  pool.query(`INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed")
  VALUES ($1, $2, $3, $4, $5, $6);`, [req.body.name, req.body.description, req.body.thumbnail, req.body.website, req.body.github, req.body.date_completed])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('Delete Server hit:', req.params.id);
  pool.query('DELETE FROM projects WHERE id=$1', [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
