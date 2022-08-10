const { request, response } = require("express");

/*
  PATH: '/api/auth/register'
*/
const authRegister = ( req = request, res = response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'authRegister'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red } - Error details: ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = authRegister;
