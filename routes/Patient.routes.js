const express = require("express");
const userModel = require("../models/user.model");

const patientRouter = express.Router();

patientRouter.post("/patient/appointments", async (req, res) => {
  try {
    const user = req.body;
    await userModel.create(user);
    res.status(201).json({ msg: "appointment booked successfully" });
  } catch (err) {
    res.json(500).json({ msg: "error in appointment booking" });
  }
});

module.exports = patientRouter;
