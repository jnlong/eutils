
var type = require('./type');

function loadElement(eleType, urlAttr, url, cb, id) {
    // 通过elemengt的id来防止重复加载相同的文件
    if (!url) {
        return;
    }
    if (id && document.getElementById(id)) {
        return;
    }
    let tag = document.createElement(eleType);
    if (cb) {
        tag.onload = cb;
        tag.onerror = cb;
    }
    tag.setAttribute(urlAttr, url);
    id && (tag.setAttribute('id', id));
    document.body.appendChild(tag);
}

module.exports = {
    loadCss: function (href, cb, id) {
        loadElement('link', 'href', href, cb, id);
    },

    loadScript: function (src, cb, id) {
        loadElement('script', 'src', src, cb, id);
    },

    loadImg: function (src, cb, id) {
        loadElement('img', 'src', src, cb, id);
    }
}
