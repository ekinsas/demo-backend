const { query, body, param } = require('express-validator');

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
};
