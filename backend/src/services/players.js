const Joi = require("joi");

const validate = (player, type) => {
  return Joi.object({
    lastName: Joi.string().min(3).max(255).presence(type),
    firstName: Joi.string().min(3).max(255).presence(type),
    p_age: Joi.string().min(1).max(255).presence("optional"),
    phone_num: Joi.string().min(3).max(255).presence("optional"),
    email: Joi.string().min(3).max(255).presence(type),
    password: Joi.string().min(3).max(255).presence(type),
    p_position_id: Joi.string().min(1).max(255).presence(type),
    foot_id: Joi.string().min(1).max(255).presence(type),
    user_status_id: Joi.string().min(1).max(255).presence(type),
  }).validate(player, { abortEarly: false }).error;
};
module.exports = validate;
