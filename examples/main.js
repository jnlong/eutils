import eutils from '../src/index';
import config from './config';

var type = eutils.type;
var log = eutils.log;

// 全局控制console
window.isDebug = config.isDebug;
window.eutils = eutils;

// cookie
eutils.cookie.set({name: 'uid', value: 'uid-123456', days: 30});
log('cookie-get', eutils.cookie.get('uid'));

// detector
log('detector', eutils.detector.parse(navigator.userAgent));

// date
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

// load
var iptloadimg = document.getElementById('iptloadimg');
var loadimgwp = document.getElementById('loadimgwp');
document.getElementById('btnloadimg').addEventListener('click', function() {
    loadimgwp.appendChild(eutils.loadImg(iptloadimg.value, function(){
        log('loadImg')
    }, null, false));
});
console.group('load');
eutils.loadCss('https://cdn.bootcss.com/animate.css/3.7.0/animate.css');
eutils.loadScript('https://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js', function(){
    log('loadScript')
});

// log
var iptlog = document.getElementById('iptlog');
document.getElementById('btnlog').addEventListener('click', function() {
    log('logclick: ', iptlog.value);
    document.getElementById('reslog').innerHTML = iptlog.value;
});

// lazyImg: 如果存在异步加载的图片，比如feed中的翻页后动态加载图片，需要新的数据加载后执行 lazyImg.setImages()
var lazyImgList = [];
var imgtpl = document.getElementById('imgtpl').innerHTML;
for(var i = 0; i < 4; i++) {
    lazyImgList.push(imgtpl);
}
document.getElementById('lazyimgcontentwp').innerHTML = lazyImgList.join('');
setTimeout(function () {
    window.lazyImg = new eutils.LazyImg({lazyTime: 600});
}, 1000)
