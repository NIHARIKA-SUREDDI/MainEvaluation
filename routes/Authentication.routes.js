const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
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

AuthenticationRouter.post("/auth/login", async (req, res) => {
  try {
    let User = await userModel.findOne({ email: req.body.email });
    if (User) {
      let myplaintextpassword = req.body.password;
      let hash = User.password;
      bcrypt.compare(myplaintextpassword, hash, function (err, result) {
        if (err) {
          res.status(500).json({ msg: "something went wrong" });
        } else {
          if (result) {
            var token = jwt.sign(
              { userid: User._id, role: User.role },
              process.env.JWT_SECRET
            );
            res.status(201).json({ msg: "login success", token });
          } else {
            res.status(500).json({ msg: "wrong password please try again" });
          }
        }
      });
    }
  } catch (err) {
    res.status(500).json({ msg: "error in signup" });
  }
});

module.exports = AuthenticationRouter;
