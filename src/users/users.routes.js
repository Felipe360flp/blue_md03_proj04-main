const router = require("express").Router();
const userController = require("./users.controller");

router.post("/create", userController.createUserController);
router.get("/all-users", userController.findAllUserController);

module.exports = router;