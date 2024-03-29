const { Router } = require('express');
const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool');

// routes go here

// GET tasks
taskRouter.get('/', (req, res) => {
    pool.query(`SELECT * FROM "todolist"
                ORDER BY "id" ASC            
    `)

    .then((dbRes) => {
        console.log('getting tasks from database');
        res.send(dbRes.rows); // sends the rows from database as response
    })
    .catch((err) => {
        console.log('get tasks from DB error', err);
        res.sendStatus(500);
    })
}); // end GET

// GET non-completed tasks
taskRouter.get('/reorder', (req, res) => {
    pool.query(`SELECT * FROM "todolist"
                ORDER BY "id" DESC
                `)

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
taskRouter.delete('/:id', (req, res) => {
    console.log('in delete router');

    const sqlText = `
        DELETE FROM "todolist" WHERE "id" = $1
    `

    // reads parameter from the url
    const sqlParam = [ req.params.id ];

    pool.query(sqlText, sqlParam) 
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error deleting task', err);
            res.sendStatus(500);
        })
}); // end DELETE


// PUT
taskRouter.put('/:id', (req, res) => {
    console.log('in complete task router');

    // toggles complete status
    const sqlText = `
        UPDATE "todolist" 
        SET "complete" = NOT "complete" 
        WHERE "id" = $1
    `

    const sqlParam = [ req.params.id ];

    pool.query(sqlText, sqlParam) 
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in complete task', err);
            res.sendStatus(500);
        })
});


module.exports = taskRouter;