import jwt from "jsonwebtoken"
import {Customer} from "../models/Customer.js";

export const authMiddleware = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET || "secret");
    if (decodedValue) {
      Customer.findById(decodedValue).exec().then(response => {
        if (!response) {
          const newCustomer = new Customer({});
          newCustomer.save(error => {
            console.log("Error saving new Customer. ", error);
          });
          const token = jwt.sign({id: newCustomer._id.toString()}, process.env.JWT_SECRET);
          return res.status(200).json({token, justAuthenticated: true});
        }
        req.body.customer = response;
        next();
      }).catch(error => {
        console.log("Error finding. ", error);
      });
    }
  } catch (e) {
    res.status(401).json({error: "Error in Authentication"});
  }
};
