const { request, response } = require("express");
const bcrypt = require( 'bcryptjs' );
// Models
const User = require("../../models/user.model");

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

    // TODO: Generate JWT

    res.status( 201 ).json({
      ok: true,
      newUser
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
