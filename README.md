# Project Name

To-do List

## Description

_Duration: 2 day sprint_

This application is a simple to do list.
The application has these features:
* In the input field, enter a task and click "Add task" or press Enter to create a Task.
* When the Task is created, it will be stored inside of the database "weekend-to-do-app.sql"
* When the task is created, the interface refreshes and shows the task in the "Tasks to do Table".
* In the "Tasks to do" table, there are buttons to 'Mark Complete' or 'Delete' each task.
* When a Task is marked complete, it will move from the "Tasks to Do" list to the "Completed tasks"
* Whether or not a Task is complete is also stored in the database.
* Deleting a Task removes it both from the front end as well as the Database.

## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `tweekend-to-do-app` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm install pg` in your terminal
4. Run `npm install nodemon` in your terminal
5. Run `npm start` in your terminal
6. Open your browser and navigate to http://localhost:3000/


### Prerequisites

Node.js
Postgress

## Built With

HTML
CSS
JavaScript
Node.js
Postgress
Postico