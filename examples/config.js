/**
 * @files 全局配置
 */

let config = {
    isDebug: true
}

config.domain = config.isDebug ? 'http://debug.xxx.com:8080' : 'https://online.xxx.com';

export default config;
