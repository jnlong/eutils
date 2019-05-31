# 项目介绍
该项目整理了前端比较常用的工具集，包括js工具和css工具；
当我们新建一个前端项目时，只需要引入这个npm包，就可以省去很多写工具的重复工作；

* [源码地址](https://github.com/jnlong/eutils)
* [API](https://github.com/jnlong/eutils/blob/master/API.md)
* [version](https://github.com/jnlong/eutils/blob/master/version.md)
* [collection](https://github.com/jnlong/eutils/blob/master/collection.md)

![](https://github.com/jnlong/eutils/blob/master/doc/nt.png?raw=true)

# 项目规范
* 函数使用小驼峰方式命名
* 对象使用大驼峰方式命名
* 项目使用webpack构建，支持按需引入
* 支持直接引入编译前的源文件：less文件、es6文件

# 安装
$ npm install @jnlong/eutils

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

## 用法
在 example/main.js中编写了每一个API的用法，可以打开文件查看。

## example
可以运行样例查看example

* ```git clone git@github.com:jnlong/eutils.git```
* ```cd eutitls```
* ```npm install --save-dev```
* ```npm run dev```
* 用浏览器打开 ```http://localhost:8088/```查看example，也可以同时打开浏览器的控制台查看console信息

# 参考
* 工具集utils:  https://github.com/cd-dongzi/utils （star 190，css js）
* 工具集outils: https://github.com/proYang/outils （start 1189 js）
