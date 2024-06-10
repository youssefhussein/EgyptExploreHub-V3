const mongoose = require("mongoose");
const { isBefore } = require("date-fns");
const { isEmail } = require('validator');
const {package} = require('./packages')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
 
  fullname: {
    type: String,
    required:  [true, "Please enter a name"] ,
    lowercase: true,
    minlength: 3,
   
  },

  email: {
    type: String,
    required:  [true, "Email required"] ,
    unique:true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required:  [true, "Password required"] ,
    minlength: [6, "Minimum password length is 6 characters"],
  },
  birthday: {
    type: Date,
    validate: {
      validator: function(v) {
       const now = Date.now();
       return isBefore(v, new Date(now - 1000 * 60 * 60 * 24 * 365 * 18)); // 18 years old to make account
      },
      message: props => `${props.value} is not over 18 years old`
    },
    required:  [true, "Date of Birth required"] ,
  },
  gender: {
    type: String,
    enum: { values: ["Male", "Female"]},
    required:  [true, "Gender required"] ,
  },
  category: {
    type: String,
    required: true,
    default: "client",
  },
  
  packagesBought:{
    type:[package]
  }
});


//hashing password bcrypt
userSchema.pre('save', async function(next) {
 const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


const User = mongoose.model("user", userSchema);

module.exports = { User}
