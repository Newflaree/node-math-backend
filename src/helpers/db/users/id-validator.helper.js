const User = require( '../../../models/user.model' );

const userIdValidator = async ( id = '' ) => {
  const userExists = await User.findOne( id );

  if ( !userExists || !userExists.status ) {
    throw new Error( 'There is no user with that id' );
  }

  return true;
}

module.exports = { userIdValidator };
