const { query, body, param } = require('express-validator');
const {jwt} = require('jsonwebtoken')
const {
  ReasonPhrases,
  StatusCodes,
} = require('http-status-codes');

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

const validateRole = (req, res, next) => {
  const token = req.header.Authorization
  if (!token) {
    return res.status(StatusCodes.BAD_REQUEST).send("You are not permission")
  } 
  next()
}



module.exports = {
  validateGetUserByEmailPayload,
  validateRole
};
