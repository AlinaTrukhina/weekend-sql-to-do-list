const { Router } = require('express');
const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool');

// routes go here

// GET

taskRouter.get('/', (req, res) => {
    pool.query(`SELECT * FROM "todolist"`)

    .then((dbRes) => {
        console.log('getting tasks from database');
        res.send(dbRes.rows); // sends the rows from database as response
    })
    .catch((err) => {
        console.log('get tasks from DB error', err);
        res.sendStatus(500);
    })
}); // end GET

// POST

// DELETE

// PUT

module.exports = taskRouter;