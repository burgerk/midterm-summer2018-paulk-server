const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const recipeModels = require('./api/recipe.model');
const recipes = require('./api/recipe.controllers');
// const mongoUri = 'mongodb://devereld:dd2345@ds015730.mlab.com:15730/recipes-dd';
const mongoUri = 'mongodb://dangerPaul2:oh5mylord6@ds163630.mlab.com:63630/recipes-pk';
// mongodb://<dbuser>:<dbpassword>@ds163630.mlab.com:63630/recipes-pk

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
  })



app.get('/', function(req, res) {
  res.send('Ahoy there');
});

app.get('/api/recipes', recipes.findAll);
app.get('/api/recipes/:id', recipes.findById);
app.post('/api/recipes', recipes.add);
app.put('/api/recipes/:id', recipes.update);
app.delete('/api/recipes/:id', recipes.delete);

app.get('/api/import', recipes.import);
app.get('/api/killall', recipes.killall);



mongoose.connect(mongoUri);

app.listen(3001);
console.log('Server running at http://localhost:3001/');
