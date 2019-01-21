window.onload = function(){
	/**********商品数据加载*********/
	$.ajax({
		type:"post",
		url:"../php/shopping.php",
		success:function(res){
			var arr = JSON.parse(res);
			var cakeHtml = "";
			var iceHtml = "";
			var coffeeHtml = "";
			var normalHtml = "";
			var designerHtml = "";
			var dbreadHtml = "";
			var allHtml = ";"
			for(var i=0;i<37;i++){
				cakeHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=37;i<40;i++){
				iceHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=40;i<50;i++){
				coffeeHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=50;i<53;i++){
				normalHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=53;i<58;i++){
				designerHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=58;i<63;i++){
				dbreadHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			for(var i=0;i<63;i++){
				allHtml += `<li>
							<div class="pro">
								<a href="#" class="goods_list">
									<img src="../images/${arr[i].img}.jpg" />
									<h3>${arr[i].name}</h3>
									<span>￥${arr[i].price}/2.0磅</span>
								</a>
								<a href="#" class="car">
									<i></i>
									加入购物车
								</a>
							</div>
							<div class="tag">
								<img src="../images/Popularity.png"/>
							</div>
						</li>`;
			}
			$(".pro_list_box .cake").html(cakeHtml);
			$(".pro_list_box .ice").html(iceHtml);
			$(".pro_list_box .coffee").html(coffeeHtml);
			$(".pro_list_box .normal_t").html(normalHtml);
			$(".pro_list_box .designer").html(designerHtml);
			$(".pro_list_box .bread").html(dbreadHtml);
			$(".pro_list_box .all").html(allHtml);
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
	//点击切换
   	$(".sort dd").click(function(){
   		var index = $(this).index()-1;
 		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
 		$(".pro_list_box ul").eq(index).addClass("active").siblings().removeClass("active");
   	});
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
	//退出登录
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