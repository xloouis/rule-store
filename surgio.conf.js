const { utils, extendOutbounds } = require('surgio');
const path = require('path');

/**
 * 使用文档：https://surgio.js.org/
 */
module.exports = {
  /**
   * 远程片段
   * 文档：https://surgio.js.org/guide/custom-config.html#remotesnippets
   */
  remoteSnippets: [
    /* {
      name: 'apple', // 模板中对应 remoteSnippets.apple
      url: 'https://github.com/geekdada/surge-list/raw/master/surgio-snippet/apple.tpl',
      surgioSnippet: true
    } */
  ],
  customFilters: {
    hktFilter: utils.useKeywords(['hkt', 'HKT']),
  },
  artifacts: [
    /**
     * Surge
     */
    {
      name: 'rule-set.dconf',
      template: 'sg-rule-set',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/sg'),
    },
    {
      name: 'emby-proxy.dconf',
      template: 'sg-rule-emby-proxy',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/sg'),
    },
    {
      name: 'emby-direct.dconf',
      template: 'sg-rule-emby-direct',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/sg'),
    },
    /* 
     * Quantumult X
     */
    {
      name: 'proxy.snippet',
      template: 'qx-filter-proxy',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/qx'),
    },
    {
      name: 'emby-proxy.snippet',
      template: 'qx-filter-emby-proxy',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/qx'),
    },
    {
      name: 'emby-direct.snippet',
      template: 'qx-filter-emby-direct',
      provider: 'demo',
      destDir: path.join(__dirname, './dist/rule/qx'),
    }
  ],
  /**
   * 订阅地址的前缀部分，以 / 结尾
   * 例如阿里云 OSS 的访问地址 https://xxx.oss-cn-hangzhou.aliyuncs.com/
   */
  urlBase: 'https://example.com/',
  upload: {
    // 默认保存至根目录，可以在此修改子目录名，以 / 结尾，默认为 /
    prefix: '/',
    bucket: 'surgio-store',
    // 支持所有区域
    region: 'oss-cn-hangzhou',
    // 以下信息于阿里云控制台获得
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
  },
  gateway: {
    auth: true,
    accessToken: '修改我，用于登录认证',
    viewerToken: '修改我，推荐使用更长并且随机的字符串',
    useCacheOnError: false,
  },
  // 非常有限的报错信息收集
  analytics: false,
};

