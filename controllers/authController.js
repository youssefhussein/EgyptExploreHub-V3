const {User} = require("../models/users");

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('./main/signup',{title:"Sign Up"});
  console.log(req.body);
}

module.exports.login_get = (req, res) => {
  res.render('./main/register',{title:"Login"});
}

module.exports.signup_post = async (req, res) => {
  const { fullname, email, password,birthday,gender } = req.body;

  try {
    const user = await User.create({ fullname,email, password,birthday,gender });
    res.status(201).json(user);
  }
  catch(err) {
   
    res.status(400).send(handleErrors(err));
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('user login');
}


const handleErrors = (err) => {

let errorsMessages = {fullname:'',email:'', password:'',birthday:'',gender:''};

//populate duplication messages
if(err.code === 11000){
  errorsMessages.email = "Email already taken";
  return errorsMessages;
}

// populate error messages
if(err.message.includes("user validation failed:")){
Object.values(err.errors).forEach(({properties}) => {
 
    errorsMessages[properties.path ] = properties.message;

})
console.log(errorsMessages);
return errorsMessages;
}}