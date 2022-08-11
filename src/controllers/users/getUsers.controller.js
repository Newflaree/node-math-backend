const { request, response } = require("express");
// Models
const User = require("../../models/user.model");

/*
  PATH: '/api/users/'
*/
const getUsers = async ( req = request, res = response ) => {
  const { from = 0, limit = 5 } = req.query;
  const condition = { status: true };

  try {
    const [ total, users ] = await Promise.all([
      User.countDocuments( condition ),
      User.find( condition )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    res.status( 200 ).json({
      ok: true,
      total,
      users
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
