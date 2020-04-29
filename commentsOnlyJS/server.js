/*
* TODO:
* - Setup empty JS object to act as endpoint for all routes.
* - Express to run server and routes
* - Start up an instance of app
* - Configure express to use body-parser as middle-ware
* - Configure Cors for cross origin allowance
* - Initialize the main project folder
* - Configure POST Route
* - Configure GET Route
* - Setup server.
*/

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Configure POST Route
const data = [];
app.post('/add', setInfo);

function setInfo(req, res){
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.content = req.body.content;
    console.log(projectData);
    res.send(projectData);
}

// Configure GET Route
app.get('/all', getInfo);

function getInfo(req, res){
    res.send(projectData);
}

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on port: ${port}`);
}