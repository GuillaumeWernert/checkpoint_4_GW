const express = require("express");

const router = express.Router();

const playersControllers = require("./controllers/playersControllers");
const usersControllers = require("./controllers/usersControllers");

const checkUser = require("./services/users");

router.get("/players", playersControllers.browse);
router.get("/players/:id", playersControllers.read);

router.put("/players/:id", playersControllers.update);

router.post("/players", playersControllers.add);

router.delete("/players/:id", playersControllers.destroy);

router.post("/login", checkUser, usersControllers.validateUser);
router.post("/signup", checkUser, usersControllers.createUser);
module.exports = router;
