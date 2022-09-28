const {
  ReasonPhrases,
  StatusCodes,
} = require('http-status-codes');
const moment = require('moment');
const _ = require('lodash');
const { validationResult } = require('express-validator');
const service = require('./user.service');

const getUsers = async (req, res) => {
  try {
    const result = await service.getUsers();
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).json(error)
  }
};

const getUserById = async (req, res) => {
  try {
    if(!req.body.id) throw new Error('Error')
    let id = req.body.id;
    const result = await service.getUserById(id);
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).json(error)
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `Invalid actions`, error: errors.array() });
    }
    const result = await service.getUserByEmail(email);

    if (!_.isEmpty(result) && _.get(result, 'length') > 0) {
      return res.status(StatusCodes.OK).json(result[0]);
    } else {
      return res.status(StatusCodes.NO_CONTENT).send(`User with email (${email}) not found.`);
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
};
