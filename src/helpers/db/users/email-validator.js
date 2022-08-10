const User = require( '../../../models/user.model' );

const emailValidator = async ( email = '' ) => {
  const emailExists = await User.findOne({ email });

  if ( emailExists ) {
    throw new Error( 'There is already user with that email' )
  }

  return true;
}

module.exports = { emailValidator };
