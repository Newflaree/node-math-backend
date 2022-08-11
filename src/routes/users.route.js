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
const {
  validateFields,
  validateJWT,
  validateRole
} = require("../middlewares");

/*
  PATH: '/api/users'
*/ 
const router = Router();

router.get( '/', [
  validateJWT,
  validateRole,
  validateFields
], getUsers );

router.get( '/:id', [
  validateJWT,
  validateFields
], getUser );

router.put( '/:id', [
  validateJWT,
  validateFields
], updateUser );

router.delete( '/:id', [
  validateJWT,
  validateFields
], deleteUser );

module.exports = router;

