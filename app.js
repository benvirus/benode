require('./framwork/global');
const Boot = require(__serverdir + '/framwork/Bootstrap');
const env  = require(__serverdir + '/config/env');
const http = require('http');
const server = http.createServer().listen(env.server.port);
const app = new Boot(server);

console.log(`The server is listen at: http://localhost:${env.server.port}`);