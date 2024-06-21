const express = require("express");
const authController = require("../controllers/authController");
const mainRouter = express.Router();
const {authMiddleware } = require("../controllers/middleware/authMiddleware");
const Packagecontrol = require('../controllers/packages')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
//home page
mainRouter.get("/", homeController.index_get);

mainRouter.get("/package/:id", homeController.singlepkg_getDetails);
//Login page

mainRouter.get("/register",  authController.login_get);
mainRouter.post("/register",  authController.login_post);

//Create account page
mainRouter.get("/signup",authController.signup_get);
mainRouter.post("/signup",authController.signup_post);

//logout user
mainRouter.get("/logout",authController.logout_get);

mainRouter.post('/bookings', (req, res) => {
  const newBooking = new Booking(req.body);
  newBooking.save()
      .then(() => res.json({ message: 'Booking successful' }))
      .catch(err => res.status(400).json({ error: err.message }));
});



mainRouter.get("/bookingForm",authMiddleware, (req, res) => {
  res.render("./main/bookingForm" , {title:"Booking Form"});
});

mainRouter.get("/accManagement",authMiddleware, (req, res) => {
  res.render("./main/accManagement" );
});

mainRouter.get("/changePass", (req, res) => {
  res.render("./main/changePass" );
});

mainRouter.get("/profile",authMiddleware,userController.getProfile);
mainRouter.put("/profile",authMiddleware,userController.updateProfile);

mainRouter.post('/profile-rote', (req, res) => {
  const { title, snippet, body } = req.body;

  const u = new User({
    fullname,
    email,
    password,
    birthday
  });

  blog.save()
    .then(result => {
      res.status(201).json({ message: 'Blog created successfully', blog: result });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating blog', error: err });
    });
});



module.exports = mainRouter;



