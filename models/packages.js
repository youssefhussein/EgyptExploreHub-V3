const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {User} = require("./users");
const { isAfter, add, isBefore } = require("date-fns");
const nodemailer = require("nodemailer");

const packageSchema = Schema({
  name: { type: String, required: [true,"Add a name"], unique: true },
  lat: { type: Number, required: [true," "] },
  lng: { type: Number, required: [true," "] },
  location: { type: String, required: [true,"Add a location"] },
  price: { type: Number, min: [50, "Must be above 50"], required: [true,"Add a price"] },
  description: { type: String, minlength: [20, "Description too short!"] , required: [true,"Add a description"] },
  startAt: {
    type: Date,
    required: [true, "Add a starting date"],
    validate: {
      validator: function (v) {
        const now = Date.now();
        const oneWeek = add(new Date(now), { weeks: 1 });
        return isAfter(v, oneWeek); //must be after 1 week from now
      },
      message: (props) => `Time must be after a week from now`,
    },
  },
  endAt: {
    type: Date,
    required: [true, "Add an ending date"],
    validate: {
      validator: function (v) {
        const now = Date.now();
        const oneday = add(new Date(now), { weeks: 1, days: 1 });
        return isAfter(v, oneday); //must be before 1 week from now
      },
      message: (props) =>
        `${props.value} package must be at least one day long`,
    },
  },
  capacity: { type: Number, min: [5, "Must be at least five people so make money"], required: [true,"Add a capacity"], default: 10 },
});

//sending email to clients
packageSchema.post("save", async function (doc) {
  try{
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });




  const allEmails = await User.find({},'email').exec();
  console.log(allEmails)
  const pureEmails = allEmails.map(email => email.email);
console.log(pureEmails)
  const email = pureEmails.join(','); 
console.log(email)
console.log(this.name)

  const info = await transporter.sendMail({
  from: `"EgyptExploreHub 👻" < ${process.env.MAIL_USER} >`, // sender address
  to: "zeyad2202617@miuegypt.edu.eg", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: `<div><b>Hello world?</b>  "${doc.name}" new package added. <br>At-> "${doc.location}"</div>`, // html body
});

console.log("Message sent: %s", info.messageId);}
catch(err){
  console.log(err)
}







})





const Package = mongoose.model("package", packageSchema);
module.exports = Package;
