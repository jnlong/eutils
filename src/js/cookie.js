/**
 * @file cookie操作函数
 * @author kevin
 */

module.exports = {
    get: function(name) {
        var cookieArr = document.cookie.split('; ');
        for (var i = 0, len = cookieArr.length; i < len; i++) {
            var arr = cookieArr[i].split('=');
            if (arr[0] === name) {
                return decodeURIComponent(arr[1]);
            }

        }
        return '';
    },
    /**
     * 设置cookie
     * @params {opt} Object 配置参数
       {
           name: '',
           value: '',
           days: '',  // 有效期，单位：天
           path: '',
           ...
       }
     */
    set: function(opt = {}) {
        var time = new Date();
        var list = [];
        var days = opt.days || 1;

        opt.path = opt.path || '/';
        if (!opt.name) {
            return;
        }

        list.push(`${opt.name}=${opt.value}`);
        delete opt.days;
        delete opt.name;
        delete opt.value;

        for (const key in opt) {
            opt[key] && list.push(`${key}=${opt[key]}`);
        }
        time.setTime(time.getTime() + days * 86400000);
        time = time.toGMTString();
        list.push(`expires=${time}`);

        document.cookie = list.join(';');
    },
    del: function(name) {
        document.cookie = name + '=;expires=' + (new Date(0)).toGMTString();
    }
}
