const express = require("express");
const {
  createUSer,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUSer);

router.get("/:id", getUser);

router.get('/',getUsers);

router.put('/:id',updateUser);

router.delete('/:id',deleteUser);

module.exports = router;
