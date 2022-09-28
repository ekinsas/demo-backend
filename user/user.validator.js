const { query, body, param } = require('express-validator');

const validateGetUserByid = () => {
  return [
    body('id')
      .notEmpty()
  ];
};
const validateGetUserByEmailPayload = () => {
  return [
    query('email')
      .notEmpty()
      .withMessage(`Email address is required.`)
      .isEmail()
      .withMessage(`Invalid email address.`)
      .optional(false),
  ];
};

module.exports = {
  validateGetUserByEmailPayload,
  validateGetUserByid,
};
