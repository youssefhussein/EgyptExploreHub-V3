const express = require("express");
const adminRouter = express.Router();
const Packagecontrol = require("../controllers/packages")
const bodyParser = require('body-parser');
adminRouter.use(express.json())
adminRouter.use(bodyParser.urlencoded({ extended: true }));



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


adminRouter.get("/editclient" , (req,res) =>{
res.render("./adminstuff/clientIndex" , {title:"View Users"})
});


adminRouter.get("/editclient" , (req,res) =>{
res.render("./adminstuff/clientIndex" , {title:"View Users"})
});





adminRouter.post("/addpkg_post" , Packagecontrol.addpkg_post)






module.exports = adminRouter;
