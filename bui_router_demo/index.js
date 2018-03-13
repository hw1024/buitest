
// 第2步: 开启单页路由
window.router = bui.router();
// 演示用的数据
var badges = 9;
bui.on("pageinit",function(){
    // 第3步: 初始化路由
    router.init({
        id: "#bui-router"
    })
    
    // 绑定事件
    bind();

})

function bind() {
    // 绑定页面的所有按钮有href跳转
    bui.btn({id:"#bui-router",handle:".bui-btn"}).load();

    // 统一绑定页面所有的后退按钮
    $("#bui-router").on("click",".btn-back",function (e) {
        // 支持后退多层,支持回调
        bui.back();
    })


    // 监听后退事件,这样才能跟手机端的物理按键统一
    // router.on("back",function (e) {
    //     // 如果回退到首页则刷新页面
    //     if( e.currentTarget.pid === "main"){
    //         loader.require(["main"],function(main){
    //             // 刷新main
    //             main.init()
    //         })
    //     }
    // })
}
