const jwt = require("jsonwebtoken");
const {User} = require("../../models/users");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.userLogin;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("error verifying token", err.message);
        res.redirect("/register");
      } else {
        

        next();
      }
    });
  } else {
    console.log("no jwt cookie token");
    res.redirect("/register");
  }
};

//check user to show user properties on the client side
const checkUser = (req, res, next) => {
  const token = req.cookies.userLogin;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        console.log("error verifying token",err);
        res.locals.user = null; //user token is fucked
        next();
      } else {
        
        let myuser = await User.findById(decoded.id);
      
        res.locals.user = myuser; //user token is valid
        next();
      }
    });
  } else {
    res.locals.user = null; //no user token
    next();
  }
};

module.exports = { authMiddleware, checkUser };
