const BaseController = require(__serverdir + '/framwork/BaseController');

class ArticleService extends BaseController {
  getArticles(conditions) {
    let query = {};
    const orderBy = conditions.orderBy || 'create_time';
    if (conditions.authorId) {
      query.author_id = conditions.authorId;
    }
    if (!Object.keys(query).length) {
      query = true;
    }
    const limit = conditions.limit || 1000;
    return new Promise((resolve, reject) => {
      this.db.query(`SELECT * FROM article WHERE ? ORDER BY ${orderBy} DESC LIMIT ${limit}`, query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    })
  }

  getArticleById(id) {
    return new Promise((resolve, reject) => {
      this.db.query(`SELECT * FROM article WHERE ?`, { id }, (err, result) => {
        if (err) { reject(err); }
        resolve(result);
      });
    });
  }

  deleteById(id) {
    return new Promise((resolve, reject) => {
      this.db.query(`DELETE FROM article WHERE ?`, { id }, (err, result) => {
        if (err) { reject(err); }
        resolve(result);
      });
    })
  }

  star(id) {
    return new Promise((resolve, reject) => {
      this.db.query(`UPDATE article SET stars = stars + 1 WHERE id = ?`, [id], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}

module.exports = ArticleService;