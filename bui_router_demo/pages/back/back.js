// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("back.js was loaded");
        
    }

    // 事件绑定
    pageview.bind = function() {
        $("#backToMain").on("click",function (e) {
            // 后退并执行回调
            bui.back({
                callback: function () {
                    loader.require(["main"],function(main){
                        badges--;

                        // 更新面包屑
                        main.setBadges(badges);

                        bui.hint("更新成功")

                    })
                }
            })
        })
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})