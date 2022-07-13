import express from 'express'
import bodyParser from 'body-parser'

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// // Configuring the database
// var dbConfig = require('./config/database.config.js');
// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url, {
// 	useMongoClient: true
// });

// mongoose.connection.on('error', function() {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });
// mongoose.connection.once('open', function() {
//     console.log("Successfully connected to the database");
// })

// define a simple route
app.get('/', (req, res)=>{
    res.send("We have to display all the images using cards")
});

app.get('/show/:id', (req, res) =>{
    //edit and delete button
    res.send(`It will show the card on which we clicked! with id ${req.params.id}`)
})

app.get('/new', (req, res)=>{
    //display the form to enter image name, image detail, image URL
})

app.post('/', (req, res) =>{
    //to submit the above form to DB
})

app.get('/:id/edit', (req, res)=>{
    //should show a form with given id and able to make edit in form
})

app.put('/:id/edit', (req, res) =>{
    //should submit the above form and make changes to DB
})

app.delete('/delete/:id', (req, res)=>{
    //should delete the particular image from the DB
})

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});