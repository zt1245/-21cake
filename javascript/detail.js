window.onload = function(){
	//动态加载商品
	var title = decodeURI(location.search).split("?")[1];
	$.ajax({
		type:"post",
		url:"../php/detail.php",
		data:{
			"name":title
		},
		success:function(res){
			var arr = JSON.parse(res);
			var html = "";
			html+=`<!--详细信息开始-->
		<div class="content container">
			<div class="left">
				<!--小图-->
				<div class="cake_photo_s">
					<img src="../images/${arr.magImg.split(",")[0]}.png"/>
					<!--遮罩层-->
					<div class="mask"></div>
				</div>
				<!--图片列表-->
				<ul>
					<li class="active"><img src="../images/${arr.magImg.split(",")[0]}.png"/></li>
					<li><img src="../images/${arr.magImg.split(",")[1]}.png"/></li>
					<li><img src="../images/${arr.magImg.split(",")[2]}.png"/></li>
					<li><img src="../images/${arr.magImg.split(",")[3]}.png"/></li>
				</ul>
				<!--大图-->
				<div class="cake_photo_b">
					<img src="../images/${arr.magImg.split(",")[0]}.png"/>
				</div>
			</div>
			<div class="right">
				<h1>${arr.title}</h1>
				<ul class="detail_distribution">
					<li>
						<i></i>
						<span>保鲜条件：0－4℃保藏10小时，5℃食用为佳</span>
					</li>
					<li>
						<i></i>
						<span>参考甜度：</span>
						<span>
							<i></i>
							<i></i>
							<i class="active"></i>
							<i class="active"></i>
							<i class="active"></i>
						</span>
					</li>
				</ul>
				<div class="pro_detial">
					${arr.des}
				</div>
				<div class="outer_box">
					<div class="detail_img">
						<img src="../images/detail_img.jpg"/>
						<ul>
							<li>
								<i></i>
								17*17cm
							</li>
							<li>
								<i></i>
								适合7-8人分享
							</li>
							<li>
								<i></i>
								含10套餐具
							</li>
							<li>
								<i></i>
								最早明天 09:30配送
							</li>
						</ul>
						<p class="price">
							￥
							<span>${arr.price}</span>
							/2.0磅
						</p>
					</div>
					<div class="cake_size">
						<span>商品规格</span>
						<ul>
							<li>
								<a href="#" class="active">
									1.0磅
									<i></i>
								</a>
							</li>
							<li>
								<a href="#">
									2.0磅
									<i></i>
								</a>
							</li>
							<li>
								<a href="#">
									3.0磅
									<i></i>
								</a>
							</li>
							<li>
								<a href="#">
									5.0磅
									<i></i>
								</a>
							</li>
						</ul>
					</div>
					<div class="buy_button">
						<a href="javascript:;" class="buy_now">立即购买</a>
						<a href="javascript:;" class="go_car">加入购物车</a>
					</div>
				</div>
			</div>
		</div>
		<!--详细信息结束-->
		<!--详情图开始-->
		<div class="detail_photo container">
			<img src="../images/${arr.desImg.split(",")[0]}.jpg"/>
			<img src="../images/${arr.desImg.split(",")[1]}.jpg"/>
			<img src="../images/${arr.desImg.split(",")[2]}.jpg"/>
			<img src="../images/${arr.desImg.split(",")[3]}.jpg"/>
			<img src="../images/${arr.desImg.split(",")[4]}.jpg"/>
		</div>
		<!--详情图结束-->`;
		$(".mainly").html(html);
		//点击立即购买跳转到购物车的页面
		$(".buy_now").click(function(){
			var uname = localStorage.getItem("uname");
			if(uname){
				//添加购物车信息
				var name = decodeURI(location.search.split("?")[1]);
				var goodsInfo = [{
					"name":name,
					"num":1
				}];
				var goodsInfoJson = JSON.stringify(goodsInfo);
				//购物车信息存在就进行添加操作，不存在就进行创建
				if(localStorage.getItem(uname+"goShopping")){
					//存在，直接添加购物车信息
					var goodsInfo = localStorage.getItem(uname+"goShopping");
					var goodsInfoJson = JSON.parse(goodsInfo);
					var flag = true;//该商品是否在goshopping中已存在，true代表存在
					for(var i=0;i<goodsInfoJson.length;i++){
						if(goodsInfoJson[i].name == name){
							goodsInfoJson[i].num++;
							flag = false;
						}
					}
					if(flag){
						var goodsObj = {
							"name":name,
							"num":1
						};
						goodsInfoJson.push(goodsObj);
					}
					var json = JSON.stringify(goodsInfoJson);
					localStorage.setItem(uname+"goShopping",json);
				}else{
					//不存在，创建购物车信息
					localStorage.setItem(uname+"goShopping",goodsInfoJson);
					location.href = "car.html";
				}
			}else{
				alert("您还没有登录，请登录！");
				location.href = "login.html";
			}
		})
		$(".go_car").click(function(){
			var uname = localStorage.getItem("uname");
			if(uname){
				//添加购物车信息
				var name = decodeURI(location.search.split("?")[1]);
				var goodsInfo = [{
					"name":name,
					"num":1
				}];
				var goodsInfoJson = JSON.stringify(goodsInfo);
				//购物车信息存在就进行添加操作，不存在就进行创建
				if(localStorage.getItem(uname+"goShopping")){
					//存在，直接添加购物车信息
					var goodsInfo = localStorage.getItem(uname+"goShopping");
					var goodsInfoJson = JSON.parse(goodsInfo);
					var flag = true;//该商品是否在goshopping中已存在，true代表存在
					for(var i=0;i<goodsInfoJson.length;i++){
						if(goodsInfoJson[i].name == name){
							goodsInfoJson[i].num++;
							flag = false;
						}
					}
					if(flag){
						var goodsObj = {
							"name":name,
							"num":1
						};
						goodsInfoJson.push(goodsObj);
					}
					var json = JSON.stringify(goodsInfoJson);
					localStorage.setItem(uname+"goShopping",json);
				}else{
					//不存在，创建购物车信息
					localStorage.setItem(uname+"goShopping",goodsInfoJson);
				}
			}else{
				alert("您还没有登录，请登录！");
				location.href = "login.html";
			}
			//头部购物车显示的变化
			var goodsinfo = localStorage.getItem(uname+"goShopping");
	if(goodsinfo){
			var count = 0;
			var goodsArr = JSON.parse(goodsinfo);
			if(goodsinfo == "[]"){
				$(".cat span").css("display","none");
			}else{
				for(var i=0;i<goodsArr.length;i++){
					count += parseInt(goodsArr[i].num);
				}
				$(".cat span").css("display","block");
				$(".cat span").html(count);
			}
		}
		})
		//放大镜
	$(".cake_photo_s").hover(function(){
		$(".cake_photo_s .mask").css("display","block");
		$(".cake_photo_b").css("display","block");
		$(".cake_photo_s").mousemove(function(e){
			var e = e || event;
			var x = e.pageX;
			var y = e.pageY;
			var w = $(".cake_photo_s")[0].offsetLeft;
			var h = $(".cake_photo_s")[0].offsetTop;
			var l = x-w-parseInt($(".mask").css("width"))/2;
			var t = y-h-parseInt($(".mask").css("height"))/2;
			var left = parseInt($(".cake_photo_s").css("width"))-parseInt($(".mask").css("width"));
			var top = parseInt($(".cake_photo_s").css("height"))-parseInt($(".mask").css("height"));
			if(l<0){
				l=0;
			}else if(l>left){
				l=left;
			}
			if(t<0){
				t=0;
			}else if(t>top){
				t=top;
			}
			var le = l*(parseInt($(".cake_photo_b img").css("width"))-parseInt($(".cake_photo_b").css("width")))/left;
			var to = t*(parseInt($(".cake_photo_b img").css("height"))-parseInt($(".cake_photo_b").css("height")))/top;
			$(".mask").css("left",l);
			$(".mask").css("top",t);
			$(".cake_photo_b img").css("left",-le);
			$(".cake_photo_b img").css("top",-to);
		})
	},function(){
		$(".cake_photo_s .mask").css("display","none");
		$(".cake_photo_b").css("display","none");
	});
	//点击切换图片
	$(".left ul li").click(function(){
		var index = $(this).index();
		$(".left ul li").eq(index).addClass("active").siblings().prop("class","");
		$(".cake_photo_s img").attr("src",`../images/${arr.magImg.split(",")[index]}.png`);
		$(".cake_photo_b img").attr("src",`../images/${arr.magImg.split(",")[index]}.png`);
	})
		}
	});
	/*****************头部****************/
	//头部二维码
	$(".app_down").hover(function(){
		$(".header_code").stop().slideDown();
	},function(){
		$(".header_code").stop().slideUp();
	})
	//头部城市选择列表
	$(".city_select").hover(function(){
		$(".select_city").stop().slideDown();
	},function(){
		$(".select_city").stop().slideUp();
	})
	$(".select_city li a").click(function(){
		var str = $(".city_select span").html();
		$(".city_select span").html($(this).html());
		$(this).html(str);
	});
	//头部消息
	$(".message").hover(function(){
		$(".header_info").stop().slideDown();
	},function(){
		$(".header_info").stop().slideUp();
	})
	//判断用户是否登录
	var uname = localStorage.getItem("uname");
	if(uname){
		$(".login_register .login").css("display","none");
		$(".login_register .register").css("display","none");
		$(".login_register .myname").html(uname);
		//用户
		$(".login_register").hover(function(){
			$(".login_register ul").stop().slideDown();
		},function(){
			$(".login_register ul").stop().slideUp();
		})
	}
	$(".login_register ul .exit").click(function(){
		$(".login_register .myname").html("");
		$(".login_register .login").css("display","inline-block");
		$(".login_register .register").css("display","inline-block");
		$(".login_register ul").css("display","none");
		localStorage.setItem("uname","");
		window.location.reload();
	});
	//购物车商品显示
	var goodsinfo = localStorage.getItem(uname+"goShopping");
	if(goodsinfo){
		var count = 0;
		var goodsArr = JSON.parse(goodsinfo);
		if(goodsinfo == "[]"){
			$(".cat span").css("display","none");
		}else{
			for(var i=0;i<goodsArr.length;i++){
				count += parseInt(goodsArr[i].num);
			}
			$(".cat span").css("display","block");
			$(".cat span").html(count);
		}
	}
}