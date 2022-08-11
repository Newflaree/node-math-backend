const { Router } = require("express");
const { check } = require("express-validator");
// Controllers
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
], updateUsers );

router.delete( '/:id', [
  validateFields
], deleteUsers );

module.exports = router;

