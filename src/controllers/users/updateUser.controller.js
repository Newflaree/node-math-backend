const { request, response } = require("express");
// Helpers
// Models

/*
  PATH: '/api/users/'
*/
const updateUser = async ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'updateUser'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-USER]'.red }: Error details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateUser;
