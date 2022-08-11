const { request, response } = require("express");
const jwt = require( 'jsonwebtoken' );
// Models
const User = require( '../models/user.model' );

const validateJWT = async ( req = request, res = response, next ) => {
  const token = req.header( 'x-token' );

  if ( !token ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'There is no token in the request'
    });
  }

  try {
    const { uid } = jwt.verify( token, process.env.SECRET_KEY || '' );
    const user = await User.findById(  uid );

    if ( !user || !user.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Token is invalid'
      });
    }

    req.user = user;
    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-JWT]'.red }: Error details: ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}

module.exports = {
  validateJWT
};
