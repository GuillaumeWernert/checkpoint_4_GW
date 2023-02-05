const models = require("../models");
const validate = require("../services/players");

const browse = (req, res) => {
  models.players
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.players
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const update = (req, res) => {
  const player = req.body;
  const { id } = req.params;
  const error = validate(player, "optional");
  if (error) {
    res.status(422).send(error);
  } else {
    models.players
      .update(player, id)
      .then((response) => {
        if (response[0].affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const add = (req, res) => {
  const player = req.body;
  const error = validate(player, "required");
  if (error) {
    res.status(422).send(error);
  } else {
    models.players
      .insert(player)
      .then((createdPlayer) =>
        res.status(200).send({ ...req.body, id: createdPlayer[0].insertId })
      )
      .catch(() => {
        res.status(500).send("Error adding a new player");
      });
  }
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.players
    .delete(id)
    .then((response) => {
      if (response[0].affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
