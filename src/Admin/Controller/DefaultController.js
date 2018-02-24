const BaseController = require(__serverdir + '/framwork/BaseController');
const DateToolkit = require(__serverdir + '/src/utils/Date');

class ArticleController extends BaseController {
  indexAction(req, res) {
    this.JSON({
      name: 'admin'
    });
  }
}

module.exports = ArticleController;