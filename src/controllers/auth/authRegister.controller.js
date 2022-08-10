const { request, response } = require("express");
const bcrypt = require( 'bcryptjs' );
// Models
const User = require("../../models/user.model");
const {generateJWT} = require("../../helpers/jwt");

/*
  PATH: '/api/auth/register'
*/
const authRegister = async ( req = request, res = response ) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync( password, salt );

    // Save to DB
    await newUser.save();

    // Generate JWT
    const token = await generateJWT( newUser.uid );

    res.status( 201 ).json({
      ok: true,
      newUser,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red }: Error details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = authRegister;
