import {Router} from "express";

const publicRoutes = Router();

publicRoutes.get("/", (req, res) => {
  res.send("Hello world!");
});



export default publicRoutes;