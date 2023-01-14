import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import publicRoutes from "./routes/publicRoutes.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js";
import {adminMiddleware} from "./middlewares/adminMiddleware.js";
import {Customer} from "./models/Customer.js";
import jwt from "jsonwebtoken";


const app = express();
mongoose.set("strictQuery", false);

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  console.log(req.ip);
  res.send("Ok");
});
app.post("/auth", (req, res) => {
  Customer.findOne({ip: req.ip}).exec().then(response => {
    if (!response) {
      const newCustomer = new Customer({userAgent: req.body.userAgent, ip: req.ip});
      newCustomer.save(error => {
        console.log("Error saving new Customer. ", error);
      });
      const token = jwt.sign({id: newCustomer._id.toString()}, process.env.JWT_SECRET);
      return res.status(200).json({token, customerInfo: newCustomer});
    }
  }).catch(error => {
    console.log("Error finding. ", error);
  });
});
app.use("/secure/api/admin-only", adminMiddleware, adminRoutes);
app.use(authMiddleware, publicRoutes);

async function start() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-ecommerce");
    app.listen(parseInt(process.env.PORT), () => {
      console.log("Server is running on http://localhost:" + process.env.PORT);
    });
  } catch (e) {
    console.log("Error starting project. ", e);
  }
}
start();