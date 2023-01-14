import jwt from "jsonwebtoken"
import {Customer} from "../models/Customer.js";

export const authMiddleware = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET || "secret");
    if (decodedValue) {
      Customer.findById(decodedValue.id).exec().then(response => {
        if (response) req.customer = response;
        next();
      }).catch(error => {
        console.log("Error finding. ", error);
      });
    }
  } catch (e) {
    res.status(401).json({error: "Error in Authentication"});
  }
};
