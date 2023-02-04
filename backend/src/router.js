const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);

router.post("/login", usersControllers.validateUser);

router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
