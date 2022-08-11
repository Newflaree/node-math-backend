const { request, response } = require("express");
// Helpers
// Models

/*
  PATH: '/api/users/:id'
*/
const getUser = async ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getUser'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USER]'.red }: Error details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getUser;
