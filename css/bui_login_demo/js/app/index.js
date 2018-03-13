bui.ready(function(viewport){

 
 var register={
 	 init:function(){
         this.render();
 	 },
  	 selecter:{
 	 	"buiPage":"#bui-page",
 	 	"country_select":"#country_select",
 	 	"province_select":"#province_select",
 	 	"city_select":"#city_select"
 	 },
 	 render:function(){
 	 	var selecter=this.selecter;

 	 	//绑定省份
		var country_select = bui.select({
				trigger:selecter.country_select,
				// title:"请选择国家地区",
				type:"radio",
				data : [{
					"name":"中国",
					"value":"11"
				},{"name":"美国",
					"value":"22"
				},{
					"name":"日本",
					"value":"33"
				},{"name":"北京",
					"value":"44"
				},{
					"name":"英国",
					"value":"55"
				},{"name":"泰国",
					"value":"66"
				}]
			});

        //绑定省份
		var province_select = bui.select({
				trigger:selecter.province_select,
				title:"请选择省份",
				type:"radio",
				data : [{
					"name":"广东",
					"value":"11"
				},{"name":"广西",
					"value":"22"
				},{
					"name":"上海",
					"value":"33"
				},{"name":"北京",
					"value":"44"
				},{
					"name":"深圳",
					"value":"55"
				},{"name":"南京",
					"value":"66"
				}]
			});

        //绑定城市
        var city_select = bui.select({
				trigger:selecter.city_select,
				title:"请选择城市",
				type:"radio",
				data : [{
					"name":"广州",
					"value":"11"
				},{"name":"梅州",
					"value":"22"
				},{
					"name":"汕头",
					"value":"33"
				},{"name":"韶关",
					"value":"44"
				},{
					"name":"深圳",
					"value":"55"
				},{"name":"清远",
					"value":"66"
				}]
			});   
 	 },
 	 bind:function(){

 	 },
 	 tool:function(){
      
 	 }
 }

 register.init();
 

});