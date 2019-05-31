/**
 * @file 通用工具集
 * @author kevin
 */

module.exports = {
    /**
     * 日志打印，可以控制线上环境不打印日志；
       比如，可以通过设置全局变量 window.isDeug 来控制是否打印日志，比如：window.isDeug = !location.port;
     * @params {...}  需要打印的参数，参数会透传给console.log
     */
    log: function (...arg) {
        if (typeof window.isDeug === 'undefined' || window.isDeug === true) {
            try {
                // 改变第一个元素显示的颜色
                if (arg.length > 0 && typeof arg[0] === 'string') {
                    arg[0] = '%c' + arg[0];
                    arg.splice(1, 0, 'background:#eee;color: blue');
                }
                console.log.apply(this, arg);
            } catch (e) {
                console.log('util.log error');
            }
        }
    },

    /**
     * 判断所在浏览器是否支持localStorage
     * @return {Boolean} 是否支持localStorage，支持：返回true 不支持：返回false
     */
    checkLs: function () {
        if (!'localStorage' in window) return false;

        // safari在无痕模式，变量localStorage可用，但是调用localStorage.setItem会报错，所以要执行下面的校验
        try {
            var ls = localStorage;
            var num = new Date().getTime();
            ls.setItem(num, '1');
            if (ls.getItem(num) === '1') {
                ls.removeItem(num);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    /**
     * 对象的深度复制
     * @params {obj} Object 需要复制的对象
     * @return {obj} Object 复制后生成的对象
     */
    deepCopy: function (obj) {
        if (typeof obj === 'object') {
            return JSON.parse(JSON.stringify(obj));
        } else {
            return obj;
        }
    },

    /**
     * toast弹窗
     * @params {msg} String 弹窗内容
     * @example eutils.toast('这是一个toast提示')
     */
    toast: function (msg) {
        let tag = document.getElementById('cn_toast');

        // 校验：避免重复加载标签
        if (!tag) {
            tag = document.createElement('div');
            tag.setAttribute('id', 'cn_toast');
            tag.setAttribute('class', 'toastwp');
            document.body.appendChild(tag);
        }
        tag.innerHTML = `<span>${msg}</span>`;
        tag.style.display = 'block';
        setTimeout(() => {
            tag.style.display = 'none';
        }, 2000);
    },
    /**
     * 版本比较；
     * @memberOf Bdbox.utils
     * @name version_compare
     * @param  {string} version1 第一个版本号
     * @param  {string} version2 第二个版本号
     * @return {nubmer} num version1 == version2返回0；version1 > version2返回1；小于返回-1
     */
    versionCompare: function(version1, version2) {
        const a = version1.toString().split('.');
        const b = version2.toString().split('.');
        const len = Math.max(a.length, b.length);

        for (let i = 0; i < len; i++) {
            if ((a[i] && !b[i] && parseInt(a[i], 10) > 0) || (parseInt(a[i], 10) > parseInt(b[i], 10))) {
                return 1;
            }
            else if ((b[i] && !a[i] && parseInt(b[i], 10) > 0) || (parseInt(a[i], 10) < parseInt(b[i], 10))) {
                return -1;
            }
        }
        return 0;
    }
}
