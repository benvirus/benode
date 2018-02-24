const Migration = require(__serverdir + '/framwork/migration');

class Init extends Migration {
  /**
   * Do the migration
   */
  up() {
    const connection = this.connection;
    connection.query(`
      CREATE TABLE IF NOT EXISTS user (
        id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
        nickname VARCHAR(20) DEFAULT NULL,
        tele_num VARCHAR(15) NOT NULL,
        hash VARCHAR(80) NOT NULL,
        salt VARCHAR(40) NOT NULL,
        role VARCHAR(100) NOT NULL DEFAULT 'ordinary',
        create_time VARCHAR(15) NOT NULL,
        update_time VARCHAR(15) NOT NULL,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB CHARSET=utf8 COMMENT='用户表';
      `);
  }

  /**
   * Undo the migration
   */
  down() {
    this.connection.query(`
      DROP TABLE user;
      `);
  }
}

module.exports = Init;