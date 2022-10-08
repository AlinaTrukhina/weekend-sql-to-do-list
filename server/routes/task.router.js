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
taskRouter.post('/', (req, res) => {
    console.log('req.body', req.body);

    const sqlText = `INSERT INTO "todolist"
    (task, complete)
    VALUES ($1, $2)`
    ;

    const sqlParam = [ 
        req.body.task,
        req.body.complete 
    ];
    
    pool.query(sqlText, sqlParam) 
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST error', err);
            res.sendStatus(500);
        })
}); // end POST


// DELETE

// PUT

module.exports = taskRouter;