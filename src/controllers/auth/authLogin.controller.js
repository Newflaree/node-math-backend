const { request, response } = require("express");
const bcrypt = require( 'bcryptjs' );
// Helpers
const { generateJWT } = require("../../helpers/jwt");
// Models
const User = require("../../models/user.model");

/*
  PATH: '/api/auth/login'
*/
const authLogin = async ( req = request, res = response ) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Check if user exists, user is active or password is valid
    if ( !user || !user.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, user.password );
    if ( !validPass ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Generate JWT
    const token = await generateJWT( user._id.toString() );

    res.status( 200 ).json({
      ok: true,
      user,
      token
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
