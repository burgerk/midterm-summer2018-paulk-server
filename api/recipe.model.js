const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: String,
  title: String,
  date: Date,
  description: String,
  image: String,
  ingredients: Array,
  preparation: Array
});

module.exports = mongoose.model('Recipe', RecipeSchema);