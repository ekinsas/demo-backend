const {
  ReasonPhrases,
  StatusCodes,
} = require('http-status-codes');
const moment = require('moment');
const _ = require('lodash');
const { validationResult } = require('express-validator');
const service = require('./user.service');

const getUsers = async (req, res) => {

};

const getUserById = async (req, res) => {

};

const getUserByEmail = async (req, res) => {

};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
};
