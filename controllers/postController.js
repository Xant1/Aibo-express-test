const post = require('../models/postModel');

exports.getAll = function (req, res) {
  post
    .findAll({ raw: true })
    .then((data) => {
      res.render('index', {
        posts: data,
      });
    })
    .catch((err) => console.log(err));
};

exports.getCreatePage = function (req, res) {
  res.render('create');
};

exports.createPost = function (req, res) {
  const postPopulation = req.body.population;
  const postCountry = req.body.country;
  const postLanguage = req.body.language;
  post
    .create({
      population: postPopulation,
      country: postCountry,
      language: postLanguage,
    })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
