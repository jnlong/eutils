import eutils from '../src/index';
import config from './config';

var type = eutils.type;
var log = eutils.log;

// 全局控制console
window.isDebug = config.isDebug;
window.eutils = eutils;

// log
var iptlog = document.getElementById('iptlog');

document.getElementById('btnlog').addEventListener('click', function() {
    log('logclick: ', iptlog.value);
    document.getElementById('reslog').innerHTML = iptlog.value;
});

// date.format
var iptdateformat = document.getElementById('iptdateformat');

document.getElementById('btndateformat').addEventListener('click', function() {
    var d = new Date(iptdateformat.value);
    var res = '输入的日期格式不正确！';

    if (type.isDate(d)) {
        res = eutils.date.format(d, 'YYYY-MM-DD HH:mm:ss.SSS');
    }
    document.getElementById('resdateformat').innerHTML = res;
});

// date.add data.calDuration
console.group('data');
var addDate = eutils.date.add(eutils.date.add(new Date(), 'M', 5), 'd', 20);
log('data.add', addDate);
log('data.format', eutils.date.format(addDate, 'YYYY-MM-DD HH:mm:ss.SSS'));
log('data.calDuration', eutils.date.calDuration(addDate));
console.groupEnd();

// cookie
eutils.cookie.set({name: 'uid', value: 'uid-123456', days: 30});
log('cookie-get', eutils.cookie.get('uid'));
