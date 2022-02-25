const Product = require("../models/product.model");

exports.create = (req, res) => {
  const product = new Product({
    title: req.body.title,
    img: req.body.img,
    trailer: req.body.trailer,
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

 exports.getProducts = (req, res) => {
   Product.find()
     .then((data) => {
       if (!data) {
         res.status(404).send({
           message: `Product with id ${req.params.id} not found`,
         });
       }
       res.send(data);
     })
     .catch((err) => res.send(err));
};

exports.update = (req, res) => {
  Product.findByIdAndUpdate(req.product.id, req.body, {
    new: true,
  })
    .then((data) => {
      res.send({ product: data });
    })
    .catch((err) => res.status(500).json({ err: err }));
};

exports.removeOne = (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found!`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};
