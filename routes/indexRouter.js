const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hello motherlova!",
    user: "LeBron Jame",
    added: new Date(),
  },
  {
    text: "Hey now, you're an all-star",
    user: "Adam Smasher",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res)=>{
res.render("index", {messageArray: messages});
})

module.exports = indexRouter;
