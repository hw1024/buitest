loader.define(function(require,exports,module) {
  var pageview = {},
      pageParams;
  // 获取新闻的参数
  var getParams = bui.getPageParams();
      getParams.done(function(result){
          pageParams = result;
      })

    pageview.bind = function () {
       
       // 绑定评论按钮跳转
       $(".all-comments").on("click",function (argument) {
         bui.load({url:"pages/comment/comment.html",param:{ id: pageParams.id } });
       });

       $("#commentText").on("focus",function () {
            showSend();
       })
       $(".send").on("click",function () {
           hideSend();
       })
    }

    pageview.init = function () {
       
       this.bind();
    }

    // 显示发送
    function showSend() {
       $(".all-comments").css("display","none");
       $(".share").css("display","none");
       $(".send").css("display","block");
    }

    // 隐藏发送
    function hideSend() {
       $(".all-comments").css("display","block");
       $(".share").css("display","block");
       $(".send").css("display","none");
    }


// 页面初始化
   pageview.init();
})