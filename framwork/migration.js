const connection = require(__serverdir + '/framwork/connect.js');

class Migration {
  constructor() {
    this.connection = connection;
  }

  up() {
    // This method should be implement by sub class;
  }

  down() {
    // This method should be implement by sub class;
  }

  close() {
    this.connection.end();
  }
}

module.exports = Migration;