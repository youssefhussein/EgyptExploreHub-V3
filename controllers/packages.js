const Package =require('../models/packages')
const path = require('path');
const fs = require('fs');


module.exports.addpkg_post = async (req, res) => {
  const {pname,plocation,pprice,pdesc,pstartDate,pendDate} = req.body

  const data = {"name":pname,"location":plocation,"price":pprice,"description":pdesc,"startAt":pstartDate,"endAt":pendDate}

  try {
    const pack = await Package.create(data);
    res.status(201).json(pack);
    console.log("success package added");
    pack.save()
}
  catch(err) {
    
    res.status(400).json({ err });
    console.log("fail package added");
  }

}




 


  