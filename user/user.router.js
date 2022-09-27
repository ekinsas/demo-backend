const express = require('express');
const {
  getUserByEmail,
  getUsers,
  getUserById
} = require('./user.controller');
const {
  validateGetUserByEmailPayload,
} = require('./user.validator');

const router = express.Router();

router.get('/get-users',validateRole, getUsers)
router.get('/get-user-id/:id',validateRole, getUserById)
router.get(`/get-user/`, validateGetUserByEmailPayload(), getUserByEmail);

module.exports = router;
