const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  mongo: {
    db: 'mongodb://localhost/calendars',
    options: {useNewUrlParser: true},
  },
  facebook: {
    appId: '804726174132245',
    appSecret: process.env.FACEBOOK_APP_SECRET,
  },
};