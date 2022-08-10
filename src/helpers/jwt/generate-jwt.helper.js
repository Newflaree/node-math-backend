const jwt = require( 'jsonwebtoken' );

const generateJWT = async ( uid = '' ) => {
  return new Promise( ( resolve, reject ) => {
    const payload = { uid };

    jwt.sign( payload, process.env.SECRET_KEY || '', {
      expiresIn: '48h'
    }, ( err, token ) => {
      ( err )
        ? reject( 'Token could not be generated' )
        : resolve( token )
    })
  });
}

module.exports = generateJWT;
