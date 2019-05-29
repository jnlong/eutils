/**
 * @file 图片延迟加载
 * @author kevin
 * @des
    // 当一屏数据比较多时，非首屏的图片会做延迟加载处理；
 * @example
   1. 把img标签中需要展示的图片地址，设置给属性data-lazy：<img data-lazy="xxx.png" src="default.png"/>
   2. 页面dom元素挂载后执行
    import {LazyImg} from 'eutils';
    var lazyImg = new LazyImg();
   3. 当页面滚动过程中，在视口的img会自动展示属性data-lazy设置的图片。
 */

var lazyImg = function() {
    var me = this;
    me.threshold = 20;
    me.init();
};

lazyImg.prototype = {
    init: function() {
        var me = this;
        me.setImages();
        me.height = window.innerHeight || document.documentElement.clientHeight;
        me.addEvent();
    },
    setImages: function() {
        var me = this;
        var images = document.querySelectorAll('img[data-lazy]');
        me.images = Array.prototype.slice.apply(images);
        me.processLoad();
    },
    getImages: function() {
        var me = this;
    },
    loadImage: function(img) {
        var src = img.getAttribute('data-lazy');
        img.src = src;
        img.removeAttribute('data-lazy');
        // setTimeout(function(){//部分android浏览器替换src后不显示图片
        //     img.style.display = "block";
        // },350);
    },
    isElementInViewport: function(el) {
        var me = this;
        var rect = el.getBoundingClientRect();
        var viewportHeight = me.height;

        if (rect.top >= 0) {
            if (rect.top <= viewportHeight) {
                return true;
            }
        } else {
            if (rect.bottom >= 0) {
                return true;
            }
        }
        return false;
    },
    processLoad: function() {
        var me = this;
        for (var i = 0; i < me.images.length;) {
            if (me.isElementInViewport(me.images[i])) {
                me.loadImage(me.images[i]);
                me.images.splice(i, 1);
            } else {
                i++;
            }
        }
    },
    addEvent: function() {
        var me = this;

        window.addEventListener('orientationchange', reset);
        window.addEventListener('resize', function() {
            reset();
            handle();
        });
        window.addEventListener('scroll', handle);

        function reset() {
            setTimeout(function() {
                me.height = window.innerHeight || document.documentElement.clientHeight;
            }, 300);
        }
        function handle(e) {
            clearTimeout(me.timer);
            me.timer = setTimeout(function() {
                me.processLoad();
                // if (me.images.length === 0) {
                //     $(window).off(e.type, handle);
                //     return true;
                // }
            }, me.threshold);
        }
    }
};

module.exports = lazyImg;
