const { Router } = require("express");
const { check } = require("express-validator");
// Controllers
const { authRegister, authLogin } = require("../controllers/auth");
// Helpers
const { emailValidator } = require("../helpers/db");
// Middlewares
const { validateFields } = require("../middlewares");

/*
  PATH: '/api/auth'
*/ 
const router = Router();

router.post( '/register', [
  check( 'name', 'Name is mandatory' ).not().isEmpty(),
  check( 'email', 'Email is mandatory' ).isEmail(),
  check( 'email' ).custom( emailValidator ),
  check( 'password', 'Password must be than 6 characters' ).isLength({ min: 6 }),
  validateFields
], authRegister );

router.post( '/login', [
  check( 'email', 'Email is required' ).isEmail(),
  check( 'password', 'Password is required' ).not().isEmpty(),
  validateFields
], authLogin );

module.exports = router;
