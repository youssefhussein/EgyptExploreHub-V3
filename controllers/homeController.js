const Package = require("../models/packages");



module.exports.index_get = async (req, res) => {
    try {
      const packs = await Package.find({});
      
    res.render("./main/index",{title:'EgyptExploreHub - Travel' , packs});
      
    } catch (err) {
      res.status(400).json({ err });
      console.log("fail all packages");
    }
  };