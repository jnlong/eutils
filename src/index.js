/**
 * @file 入口js
 * @author kevin
 */

let m = {};
let tools;
let toolsKey;

const rq = require.context('./js/', true, /.js$/);

rq.keys().forEach(rqKey => {
    let attr = rqKey.replace('./', '').replace('.js', '');
    if (['tools', 'load', 'type'].indexOf(attr) != -1) {
        tools = rq(rqKey);
        console.log(tools)
        Object.keys(tools).forEach(key => {
            m[key] = tools[key];
        })
    } else {
        m[attr] = rq(rqKey);
    }
});

module.exports = m;
