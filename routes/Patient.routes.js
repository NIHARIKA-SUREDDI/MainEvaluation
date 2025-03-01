const express = require("express");
const userModel = require("../models/user.model");
const AppointmentModel = require("../models/Appointment.model");

const patientRouter = express.Router();

patientRouter.post("/patient/appointments", async (req, res) => {
  try {
    const user = req.body;
    await AppointmentModel.create(user);
    res.status(201).json({ msg: "appointment booked successfully" });
  } catch (err) {
    res.json(500).json({ msg: "error in appointment booking" });
  }
});

patientRouter.get("/patient/appointments",async(req,res)=>{
    try{
        const user=await AppointmentModel.find();
        res.status(201).json({msg:"appointments found",user});

    }
    catch(err){
        res.status(500).json({msg:"appointments not found"});
    }
});

module.exports = patientRouter;
