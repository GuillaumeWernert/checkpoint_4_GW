const Joi = require("joi");

const validate = (player) => {
  return Joi.object({
    lastName: Joi.string().min(3).max(255).presence("required"),
    firstName: Joi.string().min(3).max(255).presence("required"),
    p_age: Joi.string().min(1).max(255).presence("required"),
    phone_num: Joi.string().min(3).max(255).presence("required"),
    email: Joi.string().min(3).max(255).presence("required"),
    password: Joi.string().min(3).max(255).presence("required"),
    p_position_id: Joi.string().min(1).max(255).presence("required"),
    foot_id: Joi.string().min(1).max(255).presence("required"),
    user_status_id: Joi.string().min(1).max(255).presence("required"),
  }).validate(player, { abortEarly: false }).error;
};
module.exports = validate;
