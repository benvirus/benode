const path = require('path');

module.exports = {
  isStaticFile: (pathname) => {
    const basename = path.basename(pathname);
    if (basename) {
      const ext = basename.split('.')[1];
      if (ext) {
        return true;
      }
    }
    return false;
  }
}