import {Router} from "express";
import {Admin} from "../models/Admin.js";
import jwt from "jsonwebtoken";

const publicRoutes = Router();

publicRoutes.get("/", (req, res) => {
  res.send("Hello world!");
});

publicRoutes.post("/admin/secure-login", async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) return res.status(400).json({message: "Email or and password was not provided"});
    const admin = await Admin.findOne({email}).exec();
    if (!admin) return res.status(400).json({message: "Wrong email or password"});
    const token = jwt.sign({id: admin._id.toString()}, process.env.JWT_SECRET);
    return res.status(200).json({message: "Successfully logged in", token});
  } catch (e) {
    res.status(500).json({error: "Server error"});
  }
});

export default publicRoutes;