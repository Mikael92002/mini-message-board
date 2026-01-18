const { Router } = require("express");
const indexRouter = Router();
const messages = require("../db/messagesArray");
const controller = require("../controllers/indexController");

indexRouter.get("/", controller.indexMessagesGet);

module.exports = indexRouter;