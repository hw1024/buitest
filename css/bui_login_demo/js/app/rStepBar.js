/*
*
*StepBar API
*
*
* new rStepbar(option);
*
* BUI拓展
*
*option{
* 
*   id:"#step",
*   data:["第一步","第二步","第三步"]
*   
*}
*
* value()
* hander(index)
* next()
* prec()
* nowIndex()
* reset()
*
*/
;
function rStepbar(option) {
        this.option = option || {};
        this.init = this.init();
    }

    rStepbar.prototype = {
        init: function() {
            this.selecter = this.selecter();
            this.render();
        },
        selecter: function() {
            var id = this.option.id;

            if (typeof id !== "string" || id.length <= 0) {
                return false;
            }
            return {
                "step-box": id || {},
                "step-btn": id + " .span1",
                "step-active": id + " .span1.active",
                "circle-btn": id + " .step-cricle",
                "step-line": id + " .step-line"
            }
        },
        render: function() {
            var box = $(this.selecter['step-box']),
                data = this.option.data;

            box.addClass('bui-box-align-center container-xy step-bar');

            if (!data instanceof(Array) || data.length <= 0) {
                console.log("没有数据或者数据格式错误");
                return;
            }

            var html = [];

            data.forEach(function(el, i) {
                html.push("<div class='span1'>");
                html.push("<div class='step-cricle'>");
                html.push(i+1);
                html.push("</div>");
                html.push("<i class='step-line'></i><p>");
                html.push(el);
                html.push("</p></div>");
            });
            html=html.join("");

            box.append(html);

            this.reset();

        },
        handle: function(fn) {
            var btn = $(this.selecter['step-btn']);
            btn.bind('click', function() {
                $(this).toggleClass('active');
                var index = $(this).find('.step-cricle').text().trim();
                fn && fn(index - 1);
            })
        },
        value: function(target) {
            var btn = $(this.selecter['step-btn']);
            maxlength = btn.length - 1,
                tarNum = parseInt(target);

            if (tarNum > maxlength || tarNum < 0) {
                console.log("没有数据或超出限制");
                this.reset();
                return;
            }

            btn.forEach(function(el, i) {
                el.classList.remove("active");
                if (i <= tarNum) {
                    el.classList.add("active");
                }
            });
        },
        nowIndex: function() {
            var active_btn = $(this.selecter['step-active']).last();
            if (active_btn.length > 0) {
                return parseInt(active_btn.find(".step-cricle").text().trim() - 1);
            } else {
                return -1;
            }
        },
        reset: function() {
            var box = $(this.selecter['step-box']),
                btn = $(this.selecter['step-btn']),
                w=btn.width(),
                circle = $(this.selecter['circle-btn']),
                line = $(this.selecter['step-line']),
                data = this.option.data;
            if (w>=250) {w=250}
            size = parseInt(w / 4);
            console.log()

            circle.css({
                "width": size + 'px',
                "height": size + 'px',
                "line-height": size + 'px'
            });
            line.css("top", size / 2);

            btn.removeClass('active');

        },
        next: function() {
            var nowIndex = this.nowIndex();
            this.value(nowIndex + 1);
        },
        prev: function() {
            var nowIndex = this.nowIndex();
            this.value(nowIndex - 1);
        }
    }