const express = require("express");
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.render("./main/index",{title:'EgyptExploreHub - Travel'});
});
mainRouter.get("/register", (req, res) => {
  res.render("./main/register",{title:"Login"});
});

mainRouter.get("/signup", (req, res) => {
  res.render("./main/signup",{title:"Sign Up"});
});

mainRouter.get("/bookingForm", (req, res) => {
  res.render("./main/bookingForm" , {title:"Booking Form"});
});





module.exports = mainRouter;
