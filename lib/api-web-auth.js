'use strict';
const utils = require('./utils');

module.exports = (app, name) => {
  /**
   * 用户授权接口
   */
  class ApiWebAuth {
    /**
     * 通过code获取用户网页授权access_token
     * @param {*} code - 授权code
     * @return {object} access_token授权数据
     */
    async getUserWebAccessToken(code) {
      const res = await app.curl(
        app.config.wx[name].apiBaseUrl + app.config.wx[name].apiUrl.userWebAuthAccessToken,
        {
          data: {
            grant_type: 'authorization_code',
            appid: app.config.wx[name].AppID,
            secret: app.config.wx[name].AppSecret,
            code,
          },
          dataType: 'json',
        }
      );
      utils.checkResponseStatus(res);
      return res.data;
    }

    /**
     * 刷新用户网页授权access_token
     * @param {string} refresh_token - 刷新token
     * @return {object} access_token授权数据
     */
    async refreshUserWebAccessToken(refresh_token) {
      const res = await app.curl(
        app.config.wx[name].apiBaseUrl + app.config.wx[name].apiUrl.userRefreshWebAuthAccessToken,
        {
          data: {
            grant_type: 'refresh_token',
            appid: app.config.wx[name].AppID,
            refresh_token,
          },
          dataType: 'json',
        }
      );
      utils.checkResponseStatus(res);
      return res.data;
    }

    /**
     * 获取用户信息
     * @param {string} access_token - 用户网页授权access_token
     * @param {string} openid - 用户openid
     * @param {string} lang - 返回地区语音
     * @return {object} 用户信息对象
     */
    async getUserWebInfo(access_token, openid, lang = 'zh_CN') {
      const res = await app.curl(
        app.config.wx[name].apiBaseUrl + app.config.wx[name].apiUrl.userWebInfo,
        {
          data: {
            lang,
            openid,
            access_token,
          },
          dataType: 'json',
        }
      );
      utils.checkResponseStatus(res);
      return res.data;
    }
  }
  return new ApiWebAuth();
};
