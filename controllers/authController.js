const {User} = require("../models/users");
const jwt = require("jsonwebtoken");

// controller actions

//signup page
module.exports.signup_get = (req, res) => {
  res.render('./main/signup',{title:"Sign Up"});
  
}

//create a new user
module.exports.signup_post = async (req, res) => {
  const { fullname, email, password,birthday,gender } = req.body;
  
  try {
    const user = await User.create({ fullname,email, password,birthday,gender });
    const token = createToken(user);
    res.cookie("userLogin", token, { httpOnly: true, maxAge:7200000 , sameSite:"strict"   }); //maxAge is 2 hours cuz milliseconds

    res.status(201).json({user:user._id});
    }
    catch(err) {
      
      res.status(400).send(handleErrors(err));
      }
      
      }
     
      
//login page
module.exports.login_get = (req, res) => {
        res.render('./main/register',{title:"Login"});
  }
//login a user
  module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('user login');
  }

// errors for creating new user
const handleErrors = (err) => {

let errorsMessages = {errors:{fullname:'',email:'', password:'',birthday:'',gender:''}};

//populate duplication messages
if(err.code === 11000){
  errorsMessages.errors.email = "Email already taken";
  return errorsMessages;
}

// populate error messages
if(err.message.includes("user validation failed:")){
Object.values(err.errors).forEach(({properties}) => {
 
    errorsMessages.errors[properties.path ] = properties.message;

})

return errorsMessages;
}}

//create jwt token
const createToken = (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  return token;
};