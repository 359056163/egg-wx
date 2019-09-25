'use strict';
const api = require('../../lib');
const wxSymbol = Symbol('Application#wx');
module.exports = {
  get wx() {
    if (!this[wxSymbol]) {
      this[wxSymbol] = api(this);
    }
    return this[wxSymbol];
  },
};
