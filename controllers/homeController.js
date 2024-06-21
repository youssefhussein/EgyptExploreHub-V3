const Package = require("../models/packages");

module.exports.index_get = async (req, res) => {
  try {
    const packs = await Package.find({});

    res.render("./main/index", { title: "EgyptExploreHub - Travel", packs });
  } catch (err) {
    res.status(400).json({ err });
    console.log("fail all packages");
  }
};
module.exports.singlepkg_getDetails = async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id);
    const words = pack.name.split(" ");
    let shortname = words.slice(0, 2).join(" ");
    res.status(200).render("main/view1pak", {
      title: shortname,
      pack,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports.bookingForm_get = async (req, res) => {
const packs =  await Package.findById(req.params.id);


res.render("./main/views-index", {title:"Booking Form",packs});



}