bui.ready(function(viewport) {


    var register = {
        init: function() {
            this.render();
            this.bind();
        },
        selecter: {
            "buiPage": "#bui-page",
            "country_select": "#country_select",
            "province_select": "#province_select",
            "city_select": "#city_select",
            "regisiter": "#regisiter",
            "tipText": ".tip-box .span1"
        },
        render: function() {
            var selecter = this.selecter;

            //绑定省份
            var country_select = bui.select({
                trigger: selecter.country_select,
                // title:"请选择国家地区",
                type: "radio",
                autoClose: true,
                data: [{
                    "name": "中国",
                    "value": "11"
                }, {
                    "name": "美国",
                    "value": "22"
                }]
            });

            //绑定省份
            var province_select = bui.select({
                trigger: selecter.province_select,
                title: "请选择省份",
                type: "radio",
                data: [{
                    "name": "广东",
                    "value": "11"
                }, {
                    "name": "广西",
                    "value": "22"
                }]
            });

            //绑定城市
            var city_select = bui.select({
                trigger: selecter.city_select,
                title: "请选择城市",
                type: "radio",
                data: [{
                    "name": "广州",
                    "value": "11"
                }, {
                    "name": "梅州",
                    "value": "22"
                }]
            });

        },
        bind: function() {
            var register_btn = $(this.selecter.regisiter),
                tip = $(this.selecter.tipText);

            register_btn.on('click', function(event) {
                event.preventDefault();

                if ($("[type='password']").val()) {
                    bui.load({url:"login.html"});
                }else{
                   register.tool.hint(tip);
                   return false;
                }
            });
        },
        tool: {
            hint:function(obj) {
                obj.eq(0).hide();
                obj.eq(1).show();
                setTimeout(function() {
                    obj.eq(0).show();
                    obj.eq(1).hide();
                }, 1500);
            }
          }
        }

    register.init();


});
