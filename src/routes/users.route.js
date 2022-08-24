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
const { userIdValidator } = require("../helpers/db");
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
  check( 'id', 'Invalid Id' ).isMongoId(),
  check( 'id' ).custom( userIdValidator ),
  validateFields
], getUser );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Id' ).isMongoId(),
  check( 'id' ).custom( userIdValidator ),
  validateFields
], updateUser );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Id' ).isMongoId(),
  check( 'id' ).custom( userIdValidator ),
  validateFields
], deleteUser );

module.exports = router;

