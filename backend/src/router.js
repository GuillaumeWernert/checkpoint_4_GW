const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const playersControllers = require("./controllers/playersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);

router.put("/players/:id", playersControllers.update);

router.post("/players", playersControllers.add);

router.delete("/players/:id", playersControllers.destroy);

module.exports = router;
