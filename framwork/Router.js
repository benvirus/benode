const fs = require('fs');
const routerConfig = require(__serverdir + '/config/router-config');

class Router {
  constructor(app) {
    this.routers = {};
    Object.keys(routerConfig).map(bundle => {
      const routerFilePath = `${__serverdir}/src/${bundle}/config/router.js`;
      const exist = fs.existsSync(routerFilePath);
      if (!exist) {
        // ...
      } else {
        const router = require(routerFilePath);
        if (routerConfig[bundle].prefix) {
          Object.keys(router).map(key => {
            router[key].path = routerConfig[bundle].prefix + router[key].path;
          });
        }
        this.routers = Object.assign({}, this.routers, router);
      }
    });
  }
}

module.exports = Router;