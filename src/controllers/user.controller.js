const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const configs = require("../configs");

exports.register = (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isAdmin: req.body.isAdmin,
    isSubscribe: req.body.isSubscribe,
    isPremium: req.body.isPremium,
    subscribeDate: req.body.subscribeDate,
    email: req.body.email,
    password: hashedPassword,
  });

  user
    .save()
    .then((data) => {
      let userToken = jwt.sign(
        {
          id: data._id,
          isAdmin: data.isAdmin,
        },
        configs.jwt.secret,
        {
          expiresIn: 86400,
        }
      );
      res.status(200).send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

exports.addAdmin = (req, res) => {
		let hasedPassword = bcrypt.hashSync(req.body.password, 10);
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
      isSubscribe: req.body.isSubscribe,
      isPremium: req.body.isPremium,
      subscribeDate: req.body.subscribeDate,
			isAdmin: req.body.isAdmin,
			email: req.body.email,
			password: hasedPassword,
		});

		user.save()
		.then((data) => {
			let userToken = jwt.sign({
				id:data._id
			}, 'supersecret', { expiresIn: 86400 });

			res.send({
				token: userToken,
				auth: true
			});
		})
		.catch((err) => {
			res.status(500).send({
				error: 500,
				message: err.message || "some error occured"
			})
		})
}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      let passwordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordValid) {
        return res.status(401).send({
          message: "password not valid",
          auth: false,
          token: null,
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        configs.jwt.secret,
        {
          expiresIn: 86400,
        }
      );
      res.status(200).send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => res.status(404).send(err));
};

exports.getUser = (req, res) => {
  console.log(req.user);
  User.findById(req.user.id)
      .then((user) => {
          console.log(user);
      res.send(user);
    })
    .catch((err) => res.status(404).send(err));
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  })
    .then((data) => {
      res.send({ user: data });
    })
    .catch((err) => res.status(500).json({ err: err }));
};

exports.verifyToken = (req, res) => {
    if (req.user) {
        res.status(200).json({verify:true})
    }
};

exports.getUsers = (req, res) => {
  User.find()
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.removeOne = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User with id ${req.params.id} not found!`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};