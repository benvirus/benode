const mysql = require('mysql');
const { database } = require(__serverdir + '/config/env');

const dbConfig = {
  database: database.name,
  host: database.host,
  port: database.port,
  user: database.user,
  password: database.password
}

let connection = null;

const connect = () => {
  connection = mysql.createConnection(dbConfig);
  connection.connect((err) => {
    if (err) {
      console.log('[ERROR]: error when connecting to db:', err);
      setTimeout(connect, 2000); // 如果链接数据库失败，两秒后重试。
    }
  });
  connection.on('error', (err) => {
    console.log('[ERROR]: error when running DB', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect();
    } else {
      throw err;
    }
  });
}

connect();


module.exports = connection;