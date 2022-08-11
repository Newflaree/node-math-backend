const { request, response } = require("express");
// Helpers
// Models

/*
  PATH: '/api/users/'
*/
const getUsers = async ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getUsers'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USERS]'.red }: Error details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getUsers;
