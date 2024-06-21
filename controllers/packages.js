const Package = require("../models/packages");
const path = require("path");
const fs = require("fs");

//display all packages
module.exports.allpkg_get = async (req, res) => {
  try {
    const packs = await Package.find({});

    res
      .status(200)
      .render("adminstuff/menus/pkg/viewPKG", {
        title: "View Packages",
        packs,
      });
    console.log("success all packages");
  } catch (err) {
    res.status(400).json({ err });
    console.log("fail all packages");
  }
};

module.exports.addpkg_post = async (req, res) => {
  const { pname, lat,lng, placeName, pprice, pdesc, pstartDate, pendDate , capacity } = req.body;

  const data = {
    name: pname,
    lat:lat,
    lng: lng,
    location:placeName,
    price: pprice,
    description: pdesc,
    startAt: pstartDate,
    endAt: pendDate,
    capacity: capacity,
  };

  try {
    const pack = await Package.create(data);
    console.log("success package added");
    res.status(201).json({pack});
   
   
  } catch (err) {
    console.log("fail package added");
    
if(err.message){


}



    res.status(400).json({errors: err.errors}  );
  }
};


//display a single package
module.exports.singlepkg_get = async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id);
    const words = pack.name.split(" ");
    let shortname = words.slice(0,2).join(" ");
    res
      .status(200)
      .render("/main", {
        title: shortname,
        pack,
      });
  } catch (err) {
    res.status(400).json({ err });
  }
};


// update a package
module.exports.updatepkg_get = async (req, res) => {
  const { pname, lat, lng, placeName, pprice, pdesc, pstartDate, pendDate } = req.body;
  const id = req.params.id;

  const data = {
    name: pname,
    lat: lat,
    lng: lng,
    location: placeName,
    price: pprice,
    description: pdesc,
    startAt: pstartDate,
    endAt: pendDate,
    
  };

  try {
    const pack = await Package.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ pack });
    console.log("success package updated");
  } catch (err) {
    console.log("fail package updated");
    res.status(400).json({ errors: err.errors });
  }
};

// delete a package
module.exports.deletepkg_get = async (req, res) => {
  const id = req.params.id;

  try {
    await Package.findByIdAndRemove(id);
    res.status(200).json({ message: "Package deleted successfully" });
    console.log("success package deleted");
  } catch (err) {
    console.log("fail package deleted");
    res.status(400).json({ err });
  }
};

