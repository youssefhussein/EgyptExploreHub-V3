const express = require("express");
const authController = require("../controllers/authController");
const mainRouter = express.Router();

//home page
mainRouter.get("/", (req, res) => {
  res.render("./main/index",{title:'EgyptExploreHub - Travel'});
});


//Login page

mainRouter.get("/register",  authController.login_get);
mainRouter.post("/register",  authController.login_post);

//Create account page
mainRouter.get("/signup",authController.signup_get);
mainRouter.post("/signup",authController.signup_post);



mainRouter.get("/bookingForm", (req, res) => {
  res.render("./main/bookingForm" , {title:"Booking Form"});
});





module.exports = mainRouter;
