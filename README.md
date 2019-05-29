# 项目介绍

该项目整理了前端比较常用的工具集，包括js工具和css工具；
当我们新建一个前端项目时，只需要引入这个npm包，就可以省去很多写工具的重复工作；

# 项目规范
函数使用小驼峰方式命名、对象使用大驼峰方式命名;
项目使用webpack构建，支持按需引入
支持直接引入编译前的源文件：less文件、es6文件

# 安装
$ npm install eutils

# 使用
## js
``` javascript
    // js引用方法1
    import eutils from 'eutils';

    eutils.date.format('2018-9-6', '{y}/{m}/{d} {h}:{i}:{s}');

    // js引用方法2
    import {type, urlParse, date, log as ulog} from 'eutils';
    date.format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS');

    // 按需引入js源文件
    import date as uDate from 'eutils/src/js/date'
```
## style
``` javascript
    // 引入css
    @import 'eutils/dist/index.css';

    // 引入less：webpack需要配置less解析
    @import 'eutils/src/style/index.less';
    @import 'eutils/src/style/index.less';
```
# 功能
## js

### tools
* log(args) 打印日志，可以通过config.debug来全局控制是否打印的开关，实现只在测试环境打印日志
* deepCopy(obj) object深拷贝
* checkLs() 判断所在浏览器是否支持localStorage
* toast(msg) toast弹窗
* versionCompare(v1, v2): v1=v2, 返回0；v1大于v2, 返回1；v1小于v2，返回-1；

### date
* format(new Date(), 'MM-DD-YYYY [at] HH:mm') 日期格式化
* calDuration(d1, d2) 计算时间2比时间1，间隔的时长；如 1年前，3个月前，20天前，5分钟前，2秒前
* add(new Date(), unit, count) 对一个日期对象，加上某个单位的数量；比如给一个日期加3天：add(new Date(), 'd', 3)

### cookie
* set(name, value, hours, root)
* get({name: '', value: '', days: 3, path: '/'})
* del(name)

### urlparse
* search(name, url)
* add(name, value, url)
* remove(name, url)
* replace(name, newValue, url)
* jsonToQuery(obj)
* queryToJson(url)

### load
* loadCss(href, cb, id) 动态加载外部css链接，并且通过id校验来避免重复添加
* loadScript(src, cb, id)
* loadImg(arr, cb, id)

### type
* isSupportWebP()
* isString(obj)
* isNumber(obj)
* isArray(obj)
* isFunction(obj)
* isDate(obj)
* checkType(str, type)：正则校验: IP、QQ、english、chinese、tel、phone、postal、email、money、url、date

### detector
根据ua判断浏览器环境、版本号

* 调用 detector.parse(ua)
* 返回结果
``` javascript
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
```

## css
* common：常用样式
* reset
* normalize.css

# 参考
* 工具集utils:  https://github.com/cd-dongzi/utils （star 190，css js）
* 工具集outils: https://github.com/proYang/outils （start 1189 js）
