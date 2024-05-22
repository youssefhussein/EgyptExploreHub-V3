const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const packageSchema = Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, min: [1, "Must be above 0"], required: true },
  description: { type: String, minlength: [20,"Description too short!"] },
  startAt: { type: Date , },
  endAt: { type: Date },
});



const Package = mongoose.model("package", packageSchema);
