const Genre = require('../models/genre.model');

exports.create = (req, res) => {
  const genre = new Genre({
    title: req.body.title,

  });

  genre
    .save()
    .then((data) => {
      res.send({
        genre: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getGenre = (req, res) => {
  Genre.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Genre with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getGenres = (req, res) => {
  Genre.find()
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Genre with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};