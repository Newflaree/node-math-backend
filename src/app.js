require( 'colors' );
require( 'dotenv' ).config();
// Model
const { Server } = require("./models");

const server = new Server();
server.listen();
