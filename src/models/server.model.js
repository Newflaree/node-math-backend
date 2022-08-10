const express = require( 'express' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';

    //TODO: Call Init methods
  }

  async dbConnect() {
    throw new Error( 'Method not implemented' );
  }

  middlewares() {
    throw new Error( 'Method not implemented' );
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
