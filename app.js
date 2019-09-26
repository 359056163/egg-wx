'use strict';
const api = require('./lib');
module.exports = app => {
  if (app.config.wx) api(app);
};
