const { Router } = require("express");
// Controllers
const { authRegister, authLogin } = require("../controllers/auth");

/*
  PATH: '/api/auth'
*/ 
const router = Router();

router.post( '/register', authRegister );
router.post( '/login', authLogin );

module.exports = router;
