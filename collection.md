[TOC]

# utils收集
为了保持eutitls的通用性，建议FE同学按照下面的规范来提出一些utils

* 业务无关性：提出的utils与业务无关，可以在不同项目中复用
* 在项目中多次使用
* 可以填写代码库地址或者直接贴代码
* js要求
	* 提供分类建议，如date、type、cookie
	* 提供API参数说明
	* 提供example
* css要求
	* 提供分类建议，如文本、布局、组件、其它

## js
### 2019.4.20（zhangxianlong）
* 建议分类：tools
* 代码库地址：没有可以不填
* 代码、参数说明、example（如果填写了代码库地址，可以不填）

```
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
```

* 采纳日期：2019.4.29
* 采纳版本号：0.6.0

## css
### 2019.4.21（zhangxianlong）
* 建议分类：组件
* 代码

```
.center { /* 在父元素中，水平、垂直居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

* 采纳日期：2019.4.29
* 采纳版本号：0.6.0
