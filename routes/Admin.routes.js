const express = require("express");
const userModel = require("../models/user.model");

const AdminRouter = express.Router();

AdminRouter.get("/admin/users", async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ msg: "users not found" });
  }
});

AdminRouter.get("/admin/users/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(201).json({msg:"user found",user});
  } catch (err) {
    res.status(500).json({ msg: "error to findby userid" });
  }
});


AdminRouter.delete("/admin/users/:id",async(req,res)=>{
    try{
        const user=await userModel.findByIdAndDelete(req.params.id);
        res.status(201).json({msg:"user deleted",user});
        
    }
    catch(err){
        res.status(500).json({msg:"user not deleted"});
    }
});

AdminRouter.get("/admin/appointments",async(req,res)=>{
    try{
        const user=await userModel.find();
        res.status(201).json({msg:"appointments found",user});

    }
    catch(err){
        res.status(500).json({msg:"Appointments not found"});
    }

});


module.exports = AdminRouter;
