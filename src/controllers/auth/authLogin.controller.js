const { request, response } = require("express");

/*
  PATH: '/api/auth/login'
*/
const authLogin = ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'authLogin'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-LOGIN]'.red }: Error details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = authLogin;
