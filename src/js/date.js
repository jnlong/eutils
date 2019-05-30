/**
 * @file date操作函数
 * @author kevin
 */

var type = require('./type');
var fecha = require('fecha');

module.exports = {
    /**
     * 日期格式化
     * @author https://github.com/taylorhakes/fecha
     * @params {date} Date
     * @params {str} String 格式化方式 'YYYY-MM-DD HH:mm:ss.SSS A'
     * @example
       fecha.format(new Date(2001, 2, 5, 6, 7, 2, 5), 'MM-DD-YYYY [at] HH:mm'); // '03-05-2001 at 06:07'
     */
    format: fecha.default.format,
    /**
     * 计算 “时间1” 比 “时间2”，间隔的时长；如 1年前，3个月前，20天前，5分钟前，2秒前
     * @params {date1} Date
     * @params {date2} Date 默认是当前时间
     */
    calDuration: function (date1, date2 = new Date()) {
        let days = 1000 * 60 * 60 * 24;
        let res = '';
        let diff;
        let cur;
        let text = '前';

        if (type.isDate(date1) && type.isDate(date2)){
            diff = date2.getTime() - date1.getTime();

            if (diff < 0) {
                diff = -1 * diff;
                text = '后';
            }

            if (diff >= days * 365) {
                res = Math.floor(diff / (days * 365)) + '年';
            }
            else if (diff >= days * 30) {
                res = Math.floor(diff / (days * 30)) + '个月';
            }
            else if (diff >= days) {
                res = Math.floor(diff / days) + '天';
            }
            else if (diff >= days / 24) {
                res = Math.floor(diff / (days / 24)) + '小时';
            }
            else if (diff >= 1000 * 60) {
                res = Math.floor(diff / (1000 * 60)) + '分钟';
            } else {
                res = Math.floor(diff / 1000) + '秒';
            }
        } else {
            return '';
        }
        return `${res}${text}`;
    },

    /**
     * 对一个日期对象，加上某个单位的数量；比如给一个日期加3天：add(new Date(), 'd', 3)
     * @params 配置参数
     */
    add: function (date = new Date(), unit = 'd', count = 1) {
        let nDate = new Date(date);

        if (type.isDate(date) && type.isNumber(count)) {
            nDate = new Date(date);
            switch (unit) {
                case 'y':
                case 'Y':
                    nDate.setFullYear(date.getFullYear() + count);
                    break;
                case 'M':
                    nDate.setMonth(date.getMonth() + count);
                    break;
                case 'd':
                case 'D':
                    nDate.setDate(date.getDate() + count);
                    break;
                case 'h':
                case 'H':
                    nDate.setHours(date.getHours() + count);
                    break;
                // 分钟
                case 'm':
                    nDate.setMinutes(date.getMinutes() + count);
                    break;
                case 's':
                    nDate.setSeconds(date.getSeconds() + count);
                    break;
            }
            return nDate;
        } else {
            return new Date();
        }
    }
}
