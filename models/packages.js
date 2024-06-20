const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isAfter, add, isBefore } = require("date-fns");

const packageSchema = Schema({
  name: { type: String, required: [true,"wat"], unique: true },
  lat: { type: Number, required: [true,"wat"] },
  lng: { type: Number, required: [true,"wat"] },
  location: { type: String, required: [true,"wat"] },
  price: { type: Number, min: [50, "Must be above 50"], required: [true,"wat"] },
  description: { type: String, minlength: [20, "Description too short!"] , required: [true,"wat"] },
  startAt: {
    type: Date,
    required: [true, "wat"],
    validate: {
      validator: function (v) {
        const now = Date.now();
        const oneWeek = add(new Date(now), { weeks: 1 });
        return isAfter(v, oneWeek); //must be after 1 week from now
      },
      message: (props) => `${props.value} is too soon`,
    },
  },
  endAt: {
    type: Date,
    required: [true, "wat"],
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
