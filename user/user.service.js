const moment = require('moment');
const _ = require('lodash');
const database = require('../helpers/database');
const {
  getUsersQuery,
  getUserByIdQuery,
  getUserByEmailQuery,
} = require('./user.query');

const getUsers = async () => {
  try {
    return await database.query(getUsersQuery());
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};

const getUserById = async (id) => {
  try {
    return await database.query(getUserByIdQuery(), [id]);
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};

const getUserByEmail = async (email) => {
  try {
    return await database.query(getUserByEmailQuery(), [email]);
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
};
