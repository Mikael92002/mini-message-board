const { body, validationResult, matchedData } = require("express-validator");
const dbQueries = require("../db/queries");

const validateForm = [
  body("name")
    .isLength({ min: 2, max: 10 })
    .withMessage("Name must be between 2 and 10 characters")
    .trim()
    .isAlpha()
    .withMessage("Name must only contain alphabets"),
  body("message")
    .isLength({ min: 1, max: 250 })
    .withMessage("Message must contain at least 1 and at most 250 characters"),
];

exports.newMessagePost = [
  validateForm,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const { name, message } = matchedData(req);
    const date = new Date(Date.now()).toISOString();
    // convert to sql:
    await dbQueries.insertMessage(name, message, date);
    
    res.redirect("/");
  },
];
