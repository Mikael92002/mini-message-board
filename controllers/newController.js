const { body, validationResult, matchedData } = require("express-validator");
const messages = require("../db/messagesArray");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).send(errors.array());
    }
    const { name, message } = matchedData(req);
    // convert to sql:
    messages.push({ text: message, user: name, added: new Date(Date.now()) });
    res.redirect("/");
  },
];
