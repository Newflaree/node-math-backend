const { Router } = require("express");
const { check } = require("express-validator");
// Controllers
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/users");
// Helpers
// Middlewares
const { validateFields } = require("../middlewares");

/*
  PATH: '/api/users'
*/ 
const router = Router();

router.get( '/', [
  validateFields
], getUsers );

router.get( '/:id', [
  validateFields
], getUser );

router.put( '/:id', [
  validateFields
], updateUser );

router.delete( '/:id', [
  validateFields
], deleteUser );

module.exports = router;

