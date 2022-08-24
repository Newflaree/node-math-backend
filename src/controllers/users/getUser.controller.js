const { request, response } = require("express");
// Helpers
// Models
const User = require("../../models/user.model");

/*
  PATH: '/api/users/:id'
*/
const getUser = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const user = await User.findById( id );

    res.status( 200 ).json({
      ok: true,
      user
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
