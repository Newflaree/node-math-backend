const express = require( 'express' );
const cors = require( 'cors' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';

    //TODO: Call Init methods
    // dbConnect();
    this.middlewares();
    // routes();
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
    throw new Error( 'Method not implemented' );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

module.exports = Server;
