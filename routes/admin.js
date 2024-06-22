const express = require("express");
const adminRouter = express.Router();
const Packagecontrol = require("../controllers/packages");

const bodyParser = require("body-parser");
adminRouter.use(express.json());
adminRouter.use(bodyParser.urlencoded({ extended: true }));




adminRouter.post("/addpkg_post", Packagecontrol.addpkg_post);

adminRouter.delete("/deletepkg", Packagecontrol.deletepkg_post);


//middleware to check if user is admin
adminRouter.use((req, res, next) => {
  if(!res.locals.user)
    res.redirect("/register");

if( typeof res.locals.user != "undefined" && res.locals.user.category === "Admin"){
  next();
}else{
  res.redirect("/");
}});
 
adminRouter.get("/", (req, res) => {
  res.render("./adminstuff/1admin", { title: "Admin Panel" });
});
//edit package index
adminRouter.get("/editPackage", (req, res) => {
  res.render("./adminstuff/editpackage", { title: "Edit Packages" });
});
//package sub pages
adminRouter.get("/addPKG", (req, res) => {
  res.render("./adminstuff/menus/pkg/addPKG", { title: "" });
});
adminRouter.get("/editPKG", (req, res) => {
  res.render("./adminstuff/menus/pkg/editPKG", { title: "" });
});
adminRouter.get("/removePKG", Packagecontrol.adminviewpkg);

adminRouter.get("/viewPKG", Packagecontrol.allpkg_get);



adminRouter.get("/editclient", (req, res) => {
  res.render("./adminstuff/clientIndex", { title: "View Users" });
});

adminRouter.get("/addcli", (req, res) => {
  res.render("./adminstuff/menus/client/addcli", { title: "" });
});
adminRouter.get("/removecli", (req, res) => {
  res.render("./adminstuff/menus/client/removecli", { title: "" });
});
adminRouter.get("/viewcli", (req, res) => {
  res.render("./adminstuff/menus/client/viewcli", { title: "" });
});

adminRouter.get("/test", (req, res) => {
  res.render("./adminstuff/test", { title: "Test" });
});

adminRouter.get("/blank", (req, res) => {
  res.render("./adminstuff/partials/blank", { title: "" });
});



module.exports = adminRouter;
