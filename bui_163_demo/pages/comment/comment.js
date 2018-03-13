loader.define(function(require,exports,module) {
  var pageview = {};
  // 获取新闻的参数
  var getParams = bui.getPageParams();
      getParams.done(function(result){
          console.log(result);
      })


    pageview.init = function () {
       
       // 评论列表
       this.list();

    }

    pageview.list = function () {

        var uiList = bui.list({
            id: "#commentList",
            url: "json/article-list.json",
            data: {},
            template: template,
            refresh: false,
            onLoad: function (scroll) {
                // 自定义渲染
            },
            callback: function (e) {
                // 点击单行回调 console.log($(this).text())
            },
            height: 0,
            page:1,
            pageSize:10,
            field: {
                page: "page",        // 分页字段
                size: "pageSize",    // 页数字段
                data: "data"         // 数据字段
            }
        });
        
        //生成列表的模板
        function template (data) {
            var html = "";
        
                $.each(data,function(index, el) {
        
                    html += '<li class="bui-btn"><i class="icon-facefill"></i>'+el.name+'</li>';
                });
        
            return html;
        };
    }


// 页面初始化
   pageview.init();
})