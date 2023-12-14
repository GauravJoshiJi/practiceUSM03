const express = require("express");
const route = express.Router();
const service = require("../services/render");
const controller = require("../controller/controller");

// @descreption for home route
//Method GET
route.get("/", service.home_route);
// @descreption for adding new user
//Method GET
route.get("/add-user", service.add_user);
// @descreption for updating user
//Method GET
route.get("/update-user", service.update_user);

//RESTFULL API's
route.post("/api/users", controller.createUser);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
