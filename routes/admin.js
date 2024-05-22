const express = require("express");
const adminRouter = express.Router();


adminRouter.get("/", (req, res) => {
  res.render("./adminstuff/1admin" , {title:'Admin Panel'});
});
adminRouter.get("/editPackage", (req, res) => {
  res.render("./adminstuff/editpackage", {title:'Edit Packages'});
});

adminRouter.get("/addPKG", (req, res) => {
  res.render("./adminstuff/partials/addPKG" , {title:''});
});
adminRouter.get("/editPKG", (req, res) => {
  res.render("./adminstuff/partials/editPKG",{title:''});
});
adminRouter.get("/removePKG", (req, res) => {
  res.render("./adminstuff/partials/removePKG",{title:''});
});


adminRouter.get("/editclient" , (req,res) =>{
res.render("./adminstuff/clientIndex" , {title:"View Users"})
});



module.exports = adminRouter;
