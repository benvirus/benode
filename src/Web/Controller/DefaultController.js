const BaseController = require(__serverdir + '/framwork/BaseController');

class DefaultController extends BaseController {

  indexAction(req, res) {
    this.success({
      name: 'ben',
      age: 18
    })
  }
}

module.exports = DefaultController;