const Joi = require("joi");

const validateUser = (req, res) => {
  const { error } = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "fr", "net"] } })
      .required(),
    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });
  if (!error) {
    res.send("Hello");
  } else {
    res.status(400).json({ msg: "Wrong credentials" });
  }
};

module.exports = {
  validateUser,
};
