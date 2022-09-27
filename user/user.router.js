const express = require('express');
const {
  getUserByEmail,
} = require('./user.controller');
const {
  validateGetUserByEmailPayload,
} = require('./user.validator');

const router = express.Router();

router.get(`/get-user/`, validateGetUserByEmailPayload(), getUserByEmail);

module.exports = router;
