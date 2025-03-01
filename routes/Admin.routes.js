const express = require("express");
const userModel = require("../models/user.model");

const AdminRouter = express.Router();

AdminRouter.get("/admin/users", async (req, res) => {
  try {
    const user = await userModel.find();

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "user not found" });
  }
});

module.exports = AdminRouter;
