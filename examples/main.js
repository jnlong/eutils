import eutils from '../src/index';

var type = eutils.type;
var log = eutils.log;

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

// other
eutils.cookie.set({name: 'bid', value: 'bid-123456', days: 30});
log('cookie-bid', eutils.cookie.get('bid'));
log('ulog', eutils.date.format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS'));
