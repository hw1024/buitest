/**
 * [头条模块]
 */
loader.define(function(require,exports,module) {
    var pageview = {};

    // 头条的焦点图
    pageview.focus = function () {
        var uiSlideNews = bui.slide({
            id:"#uiSlideNews",
            height:274,
            zoom: true
        })

        // 在最后一个焦点图继续滑动的时候,加载父层的tab导航触发下一个
        uiSlideNews.on("last",function () {
            require("pages/main/home",function (home) {
                home.tab.next();
            })
        })
    }

    pageview.list = function () {
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();
        
        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        var uiList = bui.list({
            id: "#uiScroll",
            url: "json/article-list.json",
            data: {},
            template: template,
            height: listHeight,
            commandRefresh: "prepend",
            page:1,
            pageSize:10,
            field: {
                page: "page",        // 分页字段
                size: "pageSize",    // 页数字段
                data: ""         // 数据
            },
            onRefresh: function (scroll,data) {
                var firstObj = data[0];
                // 刷新的时候,通过第一条id去获取最新10条数据
                uiList.option(data,{"lastid":firstObj.Id})
            },
            onLoad: function (scroll,data) {
                // 自定义渲染
            },
            callback : function () {
                // 点击页面跳转
                var id = $(this).attr("id");
                bui.load({url:"pages/detail/detail.html",param:{id:id} });
            }
        });
        
        //生成列表的模板
        function template (data) {
            var html = '';
        
            $.each(data,function(index, el) {
                html += '<li id="'+el.Id+'" class="bui-btn bui-box-align-top">';
                html += '    <div class="thumbnail"><img src="'+el.ImgPath+'" alt=""></div>';
                html += '    <div class="span1">';
                html += '        <h3 class="item-title">'+el.Name+'</h3>';
                html += '        <div class="item-text bui-box">';
                html += '            <div class="span1">';
                html += '               <span class="cate">'+el.ExInforSources+'</span>';
                html += '            </div>';
                html += '            <span class="stick">'+el.CommentsNum+'跟帖</span>';
                html += '        </div>';
                html += '    </div>';
                html += '</li>';
            });
        
            return html;
        };
    }

    pageview.init = function () {

        // 初始化焦点图
        this.focus();

        // 初始化列表
        this.list();
    }

    // 初始化
    pageview.init();
})