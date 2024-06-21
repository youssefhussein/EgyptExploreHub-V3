const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isAfter, add, isBefore } = require("date-fns");

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
});

const Package = mongoose.model("package", packageSchema);
module.exports = Package;
