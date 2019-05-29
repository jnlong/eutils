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
    ```
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
    ```
    // 引入css
    @import 'eutils/dist/index.css';

    // 引入less：webpack需要配置less解析
    @import 'eutils/src/style/index.less';
    @import 'eutils/src/style/index.less';
    ```
# 功能
## js

### tools
log(args)
deepCopy

### date
format(time, format);
add(type, count);

### cookie
set(name, value, hours, root)
get(name)

### urlparse
search(name, url)
add(name, value, url)
remove(name, url)
replace(name, value, url)
paramToJson(param)
jsonToParam(obj)

### load
loadjs(src, cb)
loadcss(link, cb)
loadImg(arr, cb)
loadAudio(src, cb)

### type
isArray(obj)
isFunction(obj)
isNumber(obj)
checkType(str, type)：正则校验

### detector
根据ua判断浏览器环境、版本号
```
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

versionCompare(v1, v2): v1=v2, 返回0；v1大于v2, 返回1；v1小于v2，返回-1；

## css
common：常用样式
reset：包含normalize.css

# 参考
工具集utils:  https://github.com/cd-dongzi/utils （star 190，css js）
工具集outils: https://github.com/proYang/outils （start 1189 js）
