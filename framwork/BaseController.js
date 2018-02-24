const connection = require('./connect');
const env = require(__serverdir + '/config/env');

class BaseController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    this.db = connection;
    this.config = {};
    this.config.env = env;
  }

  auth(usertoken) {
    const token = usertoken || this.request.headers['x-fez-api-token'];
    if (token) {
      const user =  this.getService('Token').getUser(token);
      if (user) {
        user.token = token;
        return user;
      }
      throw new Error('Token 已失效');
    }
    throw new Error('Token Requested!');
  }

  JSON(object) {
    this.response.end(JSON.stringify(object, null, 2));
  }

  send(str) {
    this.response.end(str);
  }

  write(str) {
    this.response.write(str);
  }

  success(data) {
    this.JSON({
      success: true,
      data
    });
  }

  error(error) {
    this.JSON({
      success: false,
      error
    });
  }

  getService(service) {
    const Service = require(__serverdir + `/src/Service/${service}Service.js`);
    return new Service();
  }
}

module.exports = BaseController;