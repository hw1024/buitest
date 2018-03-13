# 163案例说明:

创建底部动态加载模板
```
buijs create demo -t main-tab
```

打开index.html, 会自动加载 main 模块 初始化底部的动态导航
会去请求 新闻模块的模板及业务. 

底部分为4个模块

新闻模块 模块名: pages/main/home
话题模块 模块名: pages/main/topic
直播模块 模块名: pages/main/live
我的模块   模块名: pages/main/setting 
都在pages/main目录下, 

我们主要创建新闻模块来说明这几个模块依赖的使用.

新闻模块pages/main/home 
新闻模块又是好多个tab, 由于tab比较多, 这里建议还是继续使用动态tab加载的方式. 

> 点击导航菜单的箭头, 还需要打开一个所有栏目的弹窗, 这个弹窗需要遮住底部的按钮, 所以弹窗需要跟main 在同一个层级, 然后把弹窗的模块抛出, 给 pages/main/home 新闻模块调用.

TAB初始化以后会加载头条模块 pages/home/home-tab1 .

头条模块 模块名: pages/home/home-tab1
初始化焦点图, 初始化下拉刷新列表,
(这里的下拉刷新是获取最新数据,加载在最前面, 跟正常的刷新操作不一样.)

焦点图还有一个事件是监听在焦点图的最后一页的滑动, 会触发导航的一下个tab 精选模块. 所以这里同样也要把 pages/main/home 新闻模块的tab抛出来.

点击列表, 触发页面跳转到 pages/detail/detail 模块, 通过传参来展示对应的详情页面.

详情底部的评论列表也是作为独立的公共模块使用的. 



