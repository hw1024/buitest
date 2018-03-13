
// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {

        var map = new AMap.Map('container', {
            resizeEnable: true,
            zoom:11,
            center: [116.397428, 39.90923]
        });

    }

    // 事件绑定
    pageview.bind = function() {
        
    }

    // 动态加载地图资源
    loader.import([
        "http://cache.amap.com/lbs/static/main1119.css",
        "http://cache.amap.com/lbs/static/es5.min.js",
        "http://webapi.amap.com/maps?v=1.4.2&key=c7c60f79d6b323835ee696ef855f10ca",
        "http://cache.amap.com/lbs/static/addToolbar.js"],function(){
      // 初始化
        pageview.init();

        // 绑定事件
        pageview.bind();
    });
    
    return pageview;
})
