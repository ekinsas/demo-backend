const express = require('express');
const {
  getUserByEmail, getUsers, getUserById
} = require('./user.controller');
const {
  validateGetUserByEmailPayload, validateGetUserByid
} = require('./user.validator');

const router = express.Router();

router.get(`/get-users/`, getUsers);

router.post(`/get-user-by-id/`, validateGetUserByid(), getUserById);

router.get(`/get-user/`, validateGetUserByEmailPayload(), getUserByEmail);

module.exports = router;
