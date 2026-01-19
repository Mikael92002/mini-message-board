const dbQueries = require("../db/queries");

exports.indexMessagesGet = async (req, res) => {
  // messages must be converted to sql (getAllMessages)
  //   res.render("index", { messageArray: messages });
  const messagesArray = await dbQueries.getAllRows()
  res.render("index", {messageArray: messagesArray})
};
