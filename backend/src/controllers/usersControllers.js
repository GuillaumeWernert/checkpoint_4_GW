const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash } = require("../services/auth");

const validateUser = (req, res) => {
  models.players
    .findOne(req.body)
    .then(async ([players]) => {
      if (players[0]) {
        if (await verifyHash(players[0].password, req.body.password)) {
          const myPlayers = { ...players[0] };
          delete myPlayers.password;
          const token = jwt.sign(myPlayers, process.env.JWT_AUTH_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myPlayers);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUser = async (req, res) => {
  res.sendStatus(200);
};

module.exports = {
  validateUser,
  createUser,
};
