/**
 * @file 入口js
 * @author kevin
 */

let m = {};
let tools;

const rq = require.context('./js/', true, /.js$/);

rq.keys().forEach(rqKey => {
    let attr = rqKey.replace('./', '').replace('.js', '');
    if (['tools', 'load', 'type'].indexOf(attr) != -1) {
        tools = rq(rqKey);
        for (let toolsKey in tools) {
            m[toolsKey] = tools[toolsKey];
        }
    } else {
        m[attr] = rq(rqKey);
    }
});

module.exports = m;
