/**
 * @file 浏览器探测器
 * @author https://github.com/hotoo/detector
 * @example var res = detector.parse(navigator.userAgent);
    返回：
    {
        device: {
            name: "iphone",
            version: -1,
            fullVersion: "-1",
            [iphone]: -1
        },
        os: {
            name: "ios",
            version: 6.1,
            fullVersion: "6.1",
            [ios]: 6.1
        },
        browser: {
            name: "chrome":
            version: 26.0,
            fullVersion: "26.0.1410.50",
            mode: 26.0,
            fullMode: "26.0.1410.50",
            compatible: false,
            [chrome]: 26.0
        },
        engine: {
            name: "webkit",
            version: 536.26,
            fullVersion: "536.26",
            mode: 523.26,
            fullMode: "523.26",
            compatible: false,
            [webkit]: 536.26
        }
    }
 */

module.exports = require('detector');
