'use strict';
const utils = require('./utils');

module.exports = (app,name) => {
  /**
   * 小程序获取用户Session接口
   */
  class ApiMiniProgramSession {
    /**
     * 小程序通过code获取用户Session
     * @param {*} js_code - 授权code
     * @return {object} jscode2session数据
     */
    async getSession(js_code) {
      const res = await app.curl(
        app.config.wx[name].apiBaseUrl + app.config.wx[name].apiUrl.getMiniProgramSession,
        {
          data: {
            grant_type: 'authorization_code',
            appid: app.config.wx[name].MiniAppID,
            secret: app.config.wx[name].MiniAppSecret,
            js_code,
          },
          dataType: 'json',
        }
      );
      utils.checkResponseStatus(res);
      return res.data;
    }
  }
  return new ApiMiniProgramSession();
};
