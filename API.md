[TOC]

# tools
为了方便调用，tools目录的API生成在eutils根目录，调用方法：eutils.log(), eutils.toast(msg)

## log
* 调用方法：eutils.log(arg1, arg2, arg3, ...);
* 参数：log(args)，接受多个参数;
* 打印日志，可以通过```window.isDebug```来全局控制是否打印的开关，实现只在测试环境打印日志；
* 为了提高可读性，在打印时对一个参数设置了颜色
![](https://github.com/jnlong/eutils/blob/master/doc/log.png?raw=true)

## deepCopy
object深拷贝，使用深拷贝的目的是：避免复制后的对象的更改，传递给源对象；
调用方法：eutils.deepCopy(obj);

### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
data|Object|是|需要执行深拷贝的object

### 返回
参数|类型|说明
--- | :---: | ---
data|Object|执行深拷贝后的对象

## checkLs
* 判断所在浏览器是否支持localStorage;
* 调用方法：eutils.checkLs();
* 返回：Boolean

## toast
toast弹窗，调用后弹出一个toast；
调用方法：eutils.toast('我是一个toast');
![](https://github.com/jnlong/eutils/blob/master/doc/toast.png?raw=true)

## versionCompare
调用方法：eutils.versionCompare(v1, v2);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
v1|String|是|版本号1
v2|String|是|版本号2
### 返回
参数|类型|说明
--- | :---: | ---
res|Number|v1=v2, 返回0；v1大于v2, 返回1；v1小于v2，返回-1；

# date
## format
日期格式化;
调用方法：etuils.date.format(new Date(), 'YYYY-MM-DD [at] HH:mm:ss');
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
date|Date|是|需要格式化的日期
format|String|是|格式样式，例如'YYYY-MM-DD [at] HH:mm:ss'
### 返回
参数|类型|说明
--- | :---: | ---
res|String| 返回样例 '2018-10-15 at 08:06:20'

## calDuration
计算时间2比时间1，间隔的时长，同时支持之前和之后；如 1年前，3个月前，20天前，5分钟前，2秒前，5个月后，3小时后；
调用方法：eutils.date.calDuration(d1, d2) ;
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
d1|Date|是|日期1
d2|Date|是|日期2
### 返回
参数|类型|说明
--- | :---: | ---
res|String|返回时间2 比 时间1，间隔的时长，如 '3个月前'、'5小时后'等等

## add
(new Date(), unit, count) 对一个日期对象，加上某个单位的数量；比如给一个日期加3天：add(new Date(), 'd', 3)
调用方法：eutils.date.calDuration(d1, d2) ;
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
d1|Date|是|日期1
d2|Date|是|日期2
### 返回
参数|类型|说明
--- | :---: | ---
res|String|时间2 比 时间1，间隔的时长，如 '3个月前'、'5小时后'等等

# cookie
## get
获取cookie；
调用方法：eutils.cookie.get(name) ;
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|cookie的名称
### 返回
参数|类型|说明
--- | :---: | ---
res|String|cookie的value

## set
添加cookie；
调用方法：eutils.cookie.set({name: '', value: '', days: 3, path: '/'}) ;
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
opt|Json|是|json格式，其中days表示失效时间（单位天）

## del
删除cookie；
调用方法：eutils.cookie.del(name) ;
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|cookie的名称

# urlparse
## search
调用方法：eutils.urlparse.search(name, url);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|需要查找的query名称;
url|String|否|query所在的url，默认是location.search;
### 返回
参数|类型|说明
--- | :---: | ---
res|String|name在url中对应的value，查找不到则返回空字符串('')

## add
在url上添加参数，并且返回新的url；
调用方法：eutils.urlparse.add(name, value, url);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|query的名称;
value|String|是|query的值;
url|String|否|需要添加参数的url，默认是location.search;
### 返回
参数|类型|说明
--- | :---: | ---
res|String|添加参数后的url

## remove
在url上删除参数；
调用方法：eutils.urlparse.remove(name, url);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|需要查找的query名称;
url|String|否|query所在的url，默认是location.search;
### 返回
参数|类型|说明
--- | :---: | ---
res|String|删除参数后的url

## replace
调用方法：eutils.urlparse.replace(name, newValue, url);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
name|String|是|需要查找的query名称;
newValue|String|是|需要替换的value;
url|String|否|query所在的url，默认是location.search;
### 返回
参数|类型|说明
--- | :---: | ---
res|String|替换参数后的url

## jsonToQuery
将json转换成url格式；
调用方法：eutils.urlparse.jsonToQuery(obj);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
obj|JSON|是|
### 返回
参数|类型|说明
--- | :---: | ---
res|String|转换后的url

## queryToJson
将url转换成json格式
调用方法：eutils.urlparse.queryToJson(url);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
url|String|否|默认是location.search;
### 返回
参数|类型|说明
--- | :---: | ---
res|Json|转换后的json对象

# load
为了方便调用，load目录的API生成在eutils根目录
## loadCss
动态加载外部css链接，并且通过id校验来避免重复添加;
调用方法：eutils.loadCss(href, id);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
href|String|是|css链接
id|String|否|不传参数，则不做重复添加的校验

## loadScript
动态加载script，并且通过id校验来避免重复添加;
调用方法：eutils.loadScript(src, cb, id);
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
src|String|是|script链接
cb|Functon|是|资源下载成功的回调函数，如果不需要回调，可以传null
id|String|否|不传参数，则不做重复添加的校验
## loadImg
(src, cb, id)
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
src|String|是|img链接
cb|Functon|是|资源下载成功的回调函数，如果不需要回调，可以传null
id|String|否|不传参数，则不做重复添加的校验

# type
为了方便调用，type目录的API生成在eutils根目录，调用方法如：eutils.isSupportWebP()
## isSupportWebP
判断是否支持webp格式的图片
返回：Boolean
## isString(obj)
判断obj是不是String类型
返回：Boolean
## isNumber(obj)
判断obj是不是Numbe类型
返回：Boolean
## isArray(obj)
判断obj是不是Arra类型
返回：Boolean
## isFunction(obj)
判断obj是不是Function类型
返回：Boolean
## isDate(obj)
判断obj是不是Date类型
返回：Boolean
## checkType
类型判断：判断str是否是指定类型，返回Boolean；
调用方法：eutils.checkType(str, type)；
正则校验的类型: IP、QQ、english、chinese、tel、phone、postal、email、money、url、date
例如：
eutils.checkType('13812560000', 'phone');  // 返回 true
etutil.checkType('aaaxxx', 'url'); 		   // 返回false

# detector
根据ua判断浏览器环境、版本号；
## parse
调用方法，eutils.detector.parse(ua)；
### 参数
参数|类型|必填|说明
--- | :---: | :---:| ---
ua|String|否|需要校验的ua，默认是navigator.userAgent
### 返回
返回json，格式如下：

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

# css
## common
常用样式

* word-nowrap： 文本-强制不换行
* word-wrap：   文本-强制换行
* ellipsis：    多出部分用省略号表示 , 用于一行
* ellipsis2：   多出部分用省略号表示 , 用于两行
* ellipsis3：   多出部分用省略号表示 , 用于三行
* flex：        flex布局
* flex-center:  flex布局，水平居中
* flex-middle： flex布局，垂直居中
* flex-cm：     flex布局，垂直、水平都居中
* center：      在父元素中，水平、垂直居中；
* mask：		   遮罩层
* bg:		    背景图样式设置

## reset
为了保持各类浏览器初始样式的一致性，执行格式重置；
## normalize.css
normalize.css v8.0.1
来源地址：github.com/necolas/normalize.css
