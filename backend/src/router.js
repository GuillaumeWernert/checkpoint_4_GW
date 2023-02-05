const express = require("express");

const router = express.Router();

const playersControllers = require("./controllers/playersControllers");

router.get("/players", playersControllers.browse);
router.get("/players/:id", playersControllers.read);

router.put("/players/:id", playersControllers.update);

router.post("/players", playersControllers.add);

router.delete("/players/:id", playersControllers.destroy);

module.exports = router;
