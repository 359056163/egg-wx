'use strict';

module.exports = app => {
  const apiCommon = require('./api-common');
  const apiMenu = require('./api-menu');
  const apiMessage = require('./api-message');
  const apiServer = require('./api-server');
  const apiJssdk = require('./api-jssdk');
  const apiCustom = require('./api-custom');
  const apiWebAuth = require('./api-web-auth');
  const apiQRCode = require('./api-qrcode');
  const apiShortUrl = require('./api-shorturl');
  const apiMiniProgramSession = require('./api-mini-program-session');
  const apiPay = require('./api-pay');
  const instance = {}
  for (const name in app.config.wx) {
    instance[name] = {
      apiCommon: apiCommon(app, name),
      apiMenu: apiMenu(app, name),
      apiMessage: apiMessage(app, name),
      apiServer: apiServer(app, name),
      apiJssdk: apiJssdk(app, name),
      apiCustom: apiCustom(app, name),
      apiWebAuth: apiWebAuth(app, name),
      apiQRCode: apiQRCode(app, name),
      apiShortUrl: apiShortUrl(app, name),
      apiMiniProgramSession: apiMiniProgramSession(app, name),
      apiPay: apiPay(app, name),
    };
  }
  return instance;
};
