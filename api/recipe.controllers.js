const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

exports.findAll = function(req, res) {
    //empty object - find everything
    Recipe.find({}, function(err, results) {
    return res.send(results);
  });
};
//exports.findById = function() {};
exports.findById = function(req, res) {
    const id = req.params.id;
    Recipe.findOne({ _id: id }, (err, result) => {
      return res.send(result);
    });
  };

//exports.add = function() {};
exports.add = function(req, res) {
    Recipe.create(req.body, function(err, recipe) {
      if (err) return console.log(err);
      return res.send(recipe);
    });
  };

exports.update = function() {};
//exports.delete = function() {};
exports.delete = function(req, res) {
    let id = req.params.id;
    Recipe.remove({ _id: id }, (result) => {
      return res.send(result);
    });
  };


exports.killall = function(req, res) {
    Recipe.deleteMany({}, (err) => {
      if (err) return console.log(err);
      return res.sendStatus(202);
    })
  };

exports.import = function(req, res) {
    Recipe.create(
        {
            "name": "recipe1309",
            "title": "Lasagna",
            "date": "2013-09-01",
            "description": "Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
            "image": "lasagna.png",
            "ingredients": [
              "salt", "honey", "sugar", "rice", "walnuts", "lime juice"
            ],
            "preparation": [
              {"step": "Boil water"}, {"step": "Fry the eggs"}, {"step": "Serve hot"}
            ]
          },
          {
            "name": "recipe1404",
            "title": "Pho-Chicken Noodle Soup",
            "date": "2014-04-15",
            "description": "Pho (pronounced \"fuh\") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.",
            "image": "pho.png",
            "ingredients": [
              "salt", "honey", "sugar", "rice", "walnuts", "lime juice"
            ],
            "preparation": [
              {"step": "Boil water"}, {"step": "Fry the eggs"}, {"step": "Serve hot"}
            ]
          },
          
          {
            "name": "recipe1210",
            "title": "Guacamole",
            "date": "2016-10-01",
            "description": "Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.",
            "image": "guacamole.png",
            "ingredients": [
              "salt", "honey", "sugar", "rice", "walnuts", "lime juice"
            ],
            "preparation": [
              {"step": "Boil water"}, {"step": "Fry the eggs"}, {"step": "Serve hot"}
            ]
          },
          
          {
            "name": "recipe1810",
            "title": "Hamburger",
            "date": "2012-10-20",
            "description": "A Hamburger (often called a burger) is a type of sandwich in the form of  rounded bread sliced in half with its center filled with a patty which is usually ground beef, then topped with vegetables such as lettuce, tomatoes and onions.",
            "image": "hamburger.png",
            "ingredients": [
              "salt", "honey", "sugar", "rice", "walnuts", "lime juice"
            ],
            "preparation": [
              {"step": "Boil water"}, {"step": "Fry the eggs"}, {"step": "Serve hot"}
            ]
          },
          
      function(err) {
        if (err) return console.log(err);
        return res.sendStatus(202);
      }
    );
  };