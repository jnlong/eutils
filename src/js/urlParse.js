/**
 * @file url 相关函数
 * @author kevin
 */

const search = location ? location.search : '';

function getSearchReg(name) {
    return new RegExp('(^|&|/?)' + name + '=([^&]*)(&|$)');
}

module.exports = {
    /**
     * 从url中查找某个参数
     *
     * @param  {name} 参数名称
     * @param  {url} String 需要查找的url，默认是location.search
     * @return {String} 查找到的value
     *
     * @example urlParse.search('channel')
     */
    search: function (name, url) {
        url = url || search;
        let result = '';
        let reg = getSearchReg(name);
        let r = url.match(reg);
        if (r != null) {
            result = r[2];
        }

        return escape(result);
    },

    add: function (name, value, url) {
        let split = '?';

        url = url || search;

        if (url.indexOf('?') !== -1) {
            split = `&`;
        }

        return `${url}${split}${name}=${value}`;
    },

    remove: function (name, url) {
        url = url || search;
        let result = '';
        let reg = getSearchReg(name);

        url = url.replace(reg, '');
        return url;
    },

    replace: function (name, newValue, url) {
        url = url || search;
        let result = '';
        let reg = getSearchReg(name);
        let r = url.match(reg);

        if (r !== null) {
            result = r[2];
        }

        url = url.replace(name + '=' + result, name + '=' + newValue);
        return url;
    },

    jsonToQuery: function (obj) {
        let query = [];

        if (typeof obj !== 'object') {
            return '';
        }

        for (let i in obj) {
            query.push(`${i}=${obj[i]}`);
        }
        return query.join('&');
    },

    queryToJson: function (url) {
        url = url || search;
        let jsonList = {};

        if (url.indexOf('?') !== -1) {
            let str = url.slice(url.indexOf('?') + 1);
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                let cur = strs[i].split('=');
                (cur.length > 1) && (jsonList[cur[0]] = escape(cur[1]));
            }
        }

        return jsonList;
    }
}
