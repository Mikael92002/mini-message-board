const messages = require("../db/messagesArray");

exports.indexMessagesGet = (req, res) => {
    // messages must be converted to sql (getAllMessages)
  res.render("index", { messageArray: messages });
};
