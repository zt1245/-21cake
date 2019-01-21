window.onload = function(){
	/****************商品加载******************/
	$.ajax({
		type:"post",
		url:"../php/index.php",
		success:function(res){
			var arr = JSON.parse(res);
			var html = "";
			var birthHtml = "";
			var childrenHtml = "";
			var partyHtml = "";
			for(var i=0;i<4;i++){
				html += `<li>
				<div class="de">
						<a href="javascript:;"><img src="../images/${arr[i].img}.png"/></a>
						<a href="javascript:;"><h6>${arr[i].name}</h6></a>
						<a href="javascript:;"><p>${arr[i].descript}</p></a>
						</div>
						<div class="cat_info">
							<span>¥${arr[i].price}/2.0磅</span>
							<a href="javascript:;" class="add_to_cart">加入购物车</a>
						</div>
						<div class="cake_detial">
							<p>￥298.00/2.0磅</p>
							<div class="cake_info">
								<a href="javascript:;" class="active">1.0磅
									<i></i>
								</a>
								<a href="javascript:;">2.0磅
									<i></i>
								</a>
								<a href="javascript:;">3.0磅
									<i></i>
								</a>
								<a href="javascript:;">5.0磅
									<i></i>
								</a>
							</div>
							<div class="cake_btn">
								<a href="#">立即购买</a>
								<a href="#">加入购物车</a>
							</div>
						</div>
						<div class="success_to_cart">
							<p>
								<i></i>
								成功添加购物车
							</p>
							<a href="#">查看购物车</a>
						</div>
					</li>`;
			}
			for(var i=4;i<8;i++){
				birthHtml += `<li>
						<a href="#"><img src="../images/${arr[i].img}.png"/></a>
						<a href="#"><h6>${arr[i].name}</h6></a>
						<a href="#"><p>${arr[i].descript}</p></a>
						<div class="cat_info">
							<span>¥${arr[i].price}/2.0磅</span>
							<a href="javascript:;" class="add_to_cart">加入购物车</a>
						</div>
						<div class="cake_detial">
							<p>￥298.00/2.0磅</p>
							<div class="cake_info">
								<a href="javascript:;" class="active">1.0磅
									<i></i>
								</a>
								<a href="javascript:;">2.0磅
									<i></i>
								</a>
								<a href="javascript:;">3.0磅
									<i></i>
								</a>
								<a href="javascript:;">5.0磅
									<i></i>
								</a>
							</div>
							<div class="cake_btn">
								<a href="#">立即购买</a>
								<a href="#">加入购物车</a>
							</div>
						</div>
						<div class="success_to_cart">
							<p>
								<i></i>
								成功添加购物车
							</p>
							<a href="#">查看购物车</a>
						</div>
					</li>`;
			}
			for(var i=8;i<12;i++){
				childrenHtml += `<li>
						<a href="#"><img src="../images/${arr[i].img}.png"/></a>
						<a href="#"><h6>${arr[i].name}</h6></a>
						<a href="#"><p>${arr[i].descript}</p></a>
						<div class="cat_info">
							<span>¥${arr[i].price}/2.0磅</span>
							<a href="javascript:;" class="add_to_cart">加入购物车</a>
						</div>
						<div class="cake_detial">
							<p>￥298.00/2.0磅</p>
							<div class="cake_info">
								<a href="javascript:;" class="active">1.0磅
									<i></i>
								</a>
								<a href="javascript:;">2.0磅
									<i></i>
								</a>
								<a href="javascript:;">3.0磅
									<i></i>
								</a>
								<a href="javascript:;">5.0磅
									<i></i>
								</a>
							</div>
							<div class="cake_btn">
								<a href="#">立即购买</a>
								<a href="#">加入购物车</a>
							</div>
						</div>
						<div class="success_to_cart">
							<p>
								<i></i>
								成功添加购物车
							</p>
							<a href="#">查看购物车</a>
						</div>
					</li>`;
			}
			for(var i=12;i<16;i++){
				partyHtml += `<li>
						<a href="#"><img src="../images/${arr[i].img}.png"/></a>
						<a href="#"><h6>${arr[i].name}</h6></a>
						<a href="#"><p>${arr[i].descript}</p></a>
						<div class="cat_info">
							<span>¥${arr[i].price}/2.0磅</span>
							<a href="javascript:;" class="add_to_cart">加入购物车</a>
						</div>
						<div class="cake_detial">
							<p>￥298.00/2.0磅</p>
							<div class="cake_info">
								<a href="javascript:;" class="active">1.0磅
									<i></i>
								</a>
								<a href="javascript:;">2.0磅
									<i></i>
								</a>
								<a href="javascript:;">3.0磅
									<i></i>
								</a>
								<a href="javascript:;">5.0磅
									<i></i>
								</a>
							</div>
							<div class="cake_btn">
								<a href="javascript:;">立即购买</a>
								<a href="javascript:;">加入购物车</a>
							</div>
						</div>
						<div class="success_to_cart">
							<p>
								<i></i>
								成功添加购物车
							</p>
							<a href="javascript:;" class="see">查看购物车</a>
						</div>
					</li>`;
				}
			$(".product_list ul").html(html);
			$(".birthday_list ul").html(birthHtml);
			$(".children_list ul").html(childrenHtml);
			$(".party_list ul").html(partyHtml);
			$(".product_list li .de").click(function(){
				var namesrc = $(this).parent().find("h6").html();
				location.href = "detail.html?"+namesrc;
			})
			var count = 0;
			var goodsinfo = localStorage.getItem(uname+"goShopping");
			if(goodsinfo){
				var goodsArr = JSON.parse(goodsinfo);
				for(var i=0;i<goodsArr.length;i++){
					count += parseInt(goodsArr[i].num);
				}
			}
			$("li .add_to_cart").click(function(){
//				$(this).parent().parent().find(".success_to_cart")
//				$(this).parent().parent().find(".see").click(function(){
//					location.href = "car.html";
//				})
				count++;
				$(".cat span").css("display","block");
				$(".cat span").html(count);
				var uname = localStorage.getItem("uname");
				if(uname){
					//添加购物车信息
					var name = $(this).parent().parent().find("h6").html();
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
			})
		}
	});
	/**********************头部*******************/
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
	//轮播图
	/*****************banner******************/
	var timer = setInterval(autoPlay,2000);
	var index = 0;
	function autoPlay(){
		index++;
		if($(".banner ul li").size()==index){
			index=0;
		}
		$(".banner ul li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$(".banner ol li").eq(index).addClass("current").siblings().prop("class","");
	}
	$(".banner").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,2000);
	});
	$(".banner ol li").mousemove(function(){
		var num = $(this).index();
		$(".banner ul li").eq(num).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$(this).addClass("current").siblings().prop("class","");
	})
	$(".banner ol li").mouseout(function(){
		autoPlay();
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
	//商品数量显示
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