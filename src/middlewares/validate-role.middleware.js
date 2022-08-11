const { request, response } = require("express");

const validateRole = ( req = request, res = response, next ) => {
  const { idParams } = req.params;

  if ( !req.user ) {
    return res.status( 500 ).json({
      ok: false,
      msg: 'You want to verify the role without validate token before'
    });
  }

  try {
    const { role, name, id } = req.user;

    if ( role !== 'ADMIN_ROLE' && id !== idParams ) {
      return res.status( 401 ).json({
        ok: false,
        msg: `${ name } is not an ADMIN`
      });
    }

    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-ROLE]' }: Error details: ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}

module.exports = {
  validateRole
};
