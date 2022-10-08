const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;  // set port to 3000
const taskRouter = require('./routes/task.router')

// use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// give access to the public folder
app.use(express.static('server/public'));

// routes tasks using taskRouter when url starts with '/tasks'
app.use('/tasks/', taskRouter)

// listen for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
