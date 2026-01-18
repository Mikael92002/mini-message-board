const { Router } = require("express");
const controller = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", {});
});
newRouter.post("/", controller.newMessagePost);

module.exports = newRouter;
