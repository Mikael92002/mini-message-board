const { Router } = require("express");
const messages = require("../db/messagesArray");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", {});
});
newRouter.post("/", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({ text: message, user: name, added: new Date(Date.now()) });
  res.redirect("/");
});

module.exports = newRouter;
