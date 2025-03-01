const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const saltRounds = 10;
const AuthenticationRouter = express.Router();

AuthenticationRouter.post("/auth/register", (req, res) => {
  try {
    let myplaintextpassword = req.body.password;
    bcrypt.hash(myplaintextpassword, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).json({ msg: "user not register" });
      } else {
        let user = { ...req.body, password: hash };
        await userModel.create(user);
        res.status(201).json({ msg: "user registered successfully" });
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "error in user register" });
  }
});

module.exports = AuthenticationRouter;
