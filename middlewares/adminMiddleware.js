import jwt from "jsonwebtoken";
import {Admin} from "../models/Admin.js";

export const adminMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET || "secret");
    if (decodedValue) {
      Admin.findById(decodedValue.id).exec().then(result => {
        if (!result) {
          return res.status(401).json({error: "Not admin"});
        }
        req.admin = result;
        next();
      }).catch(error => {
        console.log("Error finding admin. ", error);
      });
    }
  } catch (e) {
    res.status(401).json({error: "Error in Admin checking"});
  }
};