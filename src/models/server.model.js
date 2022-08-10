const express = require( 'express' );
const cors = require( 'cors' );
// Routes
const { authRouter } = require('../routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth'
    }

    //TODO: Call Init methods
    // dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    throw new Error( 'Method not implemented' );
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static( 'public' ) );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

module.exports = Server;
