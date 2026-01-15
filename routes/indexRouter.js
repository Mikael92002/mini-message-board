const { Router } = require("express");
const indexRouter = Router();
const messages = require("../db/messagesArray");

indexRouter.get("/", (req, res) => {
  res.render("index", { messageArray: messages });
});

module.exports = indexRouter;