const Product = require("../models/product.model");

exports.create = (req, res) => {
  const product = new Product({
    title: req.body.title,
    link: req.body.link,
    age: req.body.age,
    language: req.body.language,
    releaseDate: req.body.releaseDate,
    duration: req.body.duration,
    description: req.body.description,
    genre: req.body.genre,
    director: req.body.director,
    distribution: req.body.distribution,
    scriptwriter: req.body.scriptwriter,
  });

  product
    .save()
    .then((data) => {
      res.send({
        product: data
      });
    })
    .catch((err) => {
      console.error(error);
      res.status(500).send({
        error: 500,
        message: err.message || "some error occurred",
      });
    });
};

// exports.findOne = (req, res) => {
//   Product.findById(req.params.id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Product with id ${req.params.id} not found!`,
//         });
//       }
//       res.send(data);
//     })
//     .catch((err) => res.send(err));
// };

// exports.getProducts = (req, res) => {
//   Product.find()
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Product with id ${req.params.id} not found`,
//         });
//       }
//       res.send(data);
//     })
//     .catch((err) => res.send(err));
// };

// exports.update = (req, res) => {
//   Product.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//     }
//   )
//     .then((data) => {
//       res.json({
//         message: "The product's information was well updated.",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

// exports.removeOne = (req, res) => {
//   Product.findByIdAndRemove(req.params.id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Product with id ${req.params.id} not found!`,
//         });
//       }
//       res.send(data);
//     })
//     .catch((err) => res.send(err));
// };