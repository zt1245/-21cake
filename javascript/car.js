window.onload = function(){
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
	}else{
		$(".car_not_pro").css("display","block");
	}
	$(".login_register ul .exit").click(function(){
		$(".login_register .myname").html("");
		$(".login_register .login").css("display","inline-block");
		$(".login_register .register").css("display","inline-block");
		$(".login_register ul").css("display","none");
		localStorage.setItem("uname","");
		window.location.reload();
	});
	//添加商品信息
	var goodsinfo = localStorage.getItem(uname+"goShopping");
	if(goodsinfo){//如果商品信息存在,添加
		var str = localStorage.getItem(uname+"goShopping");
		if(str != "[]"){
			$(".content_box").css("display","block");
			$(".total").css("display","block");
		}else{
			$(".car_not_pro").css("display","block");
			$(".content_box").css("display","none");
			$(".total").css("dispaly","none");
		}
		//购物车商品数量的显示
		var count = 0;
		var goodsArr = JSON.parse(goodsinfo);
		if(str=="[]"){
			$(".cat span").css("display","none");
		}else{
			for(var i=0;i<goodsArr.length;i++){
				count += parseInt(goodsArr[i].num);
			}
			$(".cat span").css("display","block");
			$(".cat span").html(count);
		}
		$.ajax({
			type:"post",
			url:"../php/car.php",
			success:function(res){
				$arr = JSON.parse(res);
				var html = "";
				for(var i=0;i<goodsArr.length;i++){
					for(var j=0;j<$arr.length;j++){
						if(goodsArr[i].name == $arr[j].name){
							html+=`<tr>
								<td class="goods_img">
									<input type="checkbox" class="sel"/>
									<a href="#"><img src="../images/${$arr[j].carImg}.jpg"/></a>
								</td>
								<td class="goods_cake">
									<div>
										<h4><a href="#">${$arr[j].name}</a></h4>
										<span class="spec">规格：<span>2.0磅</span></span>
										<span class="goods_laid">
											<i></i>
											赠送
											<ins>&nbsp;10&nbsp;</ins>
											套餐具
										</span>
									</div>
								</td>
								<td class="select_birthday">
									<div class="select_card">
										<span>选择生日牌</span>
										<i></i>
										<ul>
											<li>国庆节快乐</li>
											<li>生日快乐</li>
											<li>Happy Birthday</li>
											<li>节日快乐</li>
										</ul>
									</div>
								</td>
								<td class="cake_price">￥${$arr[j].price}</td>
								<td class="cake_num">
									<div class="number">
										<input type="button" class="reduce"/>
										<input type="text" class="tex" value="${goodsArr[i].num}"/>
										<input type="button" class="add"/>
									</div>
								</td>
								<td class="money">￥${goodsArr[i].num*$arr[j].price}</td>
								<td class="delete_cake">
									<a href="javascript:;">
										<i></i>
									</a>
								</td>
							</tr>`;
						}
					}
				}
				$(".tbody_ul table").html(html);
				//点击-的时候数量减一，点击+的时候数量加1（当数量减到1的时候，这个按钮就不能在点击了）；后面的总价要跟随着改变，localstorg里面的uname+"shopping"数据也要跟随着改变。购物车的显示也要变化
				//点击-的时候数量减1
				$(".reduce").click(function(){
					var val = $(this).parent().parent().find(".tex").val();
					//当数量为1时，不能再继续减
					if(val==1){
						$(this).parent().parent().find(".tex").val(1);
					}else{
						//否则，数量就减1
						$(this).parent().parent().find(".tex").val(val-1);
					}
					var sum = $(this).parent().parent().find(".tex").val()*$(this).parent().parent().parent().find(".cake_price").html().split("￥")[1];
					var sumStr = "￥"+sum;
					$(this).parent().parent().parent().find(".money").html(sumStr);
					//localstorage的变化
					var nameS = $(this).parent().parent().parent().find("h4 a").html();
					var goodsInfo = localStorage.getItem(uname+"goShopping");
					goodsArr = JSON.parse(goodsInfo);
					for(var i=0;i<goodsArr.length;i++){
						if(goodsArr[i].name == nameS){
							goodsArr[i].num = $(this).parent().parent().find(".tex").val();
						}
					}
					var goodsStr = JSON.stringify(goodsArr);
					localStorage.setItem(uname+"goShopping",goodsStr);
					//头部购物车数量的显示
					var quantity = 0;
					var nowGoods = localStorage.getItem(uname+"goShopping");
					var nowGoodsArr = JSON.parse(nowGoods);
					if(nowGoods=="[]"){
						$(".cat span").css("display","none");
					}else{
						for(var i=0;i<nowGoodsArr.length;i++){
							quantity += parseInt(nowGoodsArr[i].num);
						}
						$(".cat span").html(quantity);
					}
					//总金额的改变
					var total = 0;
					$(".sel").each(function(index,item){
						if($(item).prop("checked")==true){
							total += parseInt($(item).parent().parent().find(".money").html().split("￥")[1]);
							$(".sum_total span").html(total);
						}
					})
				})
				//点击+的时候数量要+1
				$(".add").click(function(){
					var html = parseInt($(this).parent().parent().find(".tex").val());
					$(this).parent().parent().find(".tex").val(html+1);
					//改变总金额的html
					var sumHtml = $(this).parent().parent().find(".tex").val()*$(this).parent().parent().parent().find(".cake_price").html().split("￥")[1];
					var sumStr = "￥"+sumHtml;
					$(this).parent().parent().parent().find(".money").html(sumStr);
					//改变localhost的数据
					//获取当前的name
					var nameStr = $(this).parent().parent().parent().find("h4 a").html();
					var goodInfo = localStorage.getItem(uname+"goShopping");
					var goodArr = JSON.parse(goodInfo);
					for(var i=0;i<goodArr.length;i++){
						if(goodArr[i].name == nameStr){
							goodArr[i].num = $(this).parent().parent().find(".tex").val();
						}
					}
					var jsonStr = JSON.stringify(goodArr);
					localStorage.setItem(uname+"goShopping",jsonStr);
					//头部购物车显示的改变
					var goods = localStorage.getItem(uname+"goShopping");
					var goodJson = JSON.parse(goods);
					if(goods=="[]"){
						$(".cat span").css("display","none");
					}else{
						var numTotal = 0;
						for(var i=0;i<goodJson.length;i++){
							numTotal += parseInt(goodJson[i].num);
						}
						$(".cat span").html(numTotal);
					}
					//总金额的改变
					var total = 0;
					$(".sel").each(function(index,item){
						if($(item).prop("checked")==true){
							total += parseInt($(item).parent().parent().find(".money").html().split("￥")[1]);
							$(".sum_total span").html(total);
						}
					})
				})
				//点击页面中的x的时候整行的数据进行删除，并且数据库里的也要进行删除，然后购物车的显示也要随之改变
				$(".delete_cake").click(function(){
					var sname = $(this).parent().find("h4 a").html();
					//localstorage的数据进行改变
					var goodsinfo = localStorage.getItem(uname+"goShopping");
					var goodsarr = JSON.parse(goodsinfo);
					for(var i=0;i<goodsarr.length;i++){
						if(goodsarr[i].name == sname){
							goodsarr.splice(sname,1);
						}
					}
					var str = JSON.stringify(goodsarr);
					localStorage.setItem(uname+"goShopping",str);
					//头部的购物车显示要改变
					var goods = localStorage.getItem(uname+"goShopping");
					var goodJson = JSON.parse(goods);
					if(goods=="[]"){
						$(".cat span").css("display","none");
					}else{
						var numTotal = 0;
						for(var i=0;i<goodJson.length;i++){
							numTotal += parseInt(goodJson[i].num);
						}
						$(".cat span").html(numTotal);
					}
					//整行tr删除
					$(this).parent().remove();
					var str = localStorage.getItem(uname+"goShopping");
					if(str == "[]"){
						$(".car_not_pro").css("display","block");
						$(".content_box").css("display","none");
						$(".total").css("display","none");
					}
					var sum = 0;
					$(".sel").each(function(index,item){
						if($(item).prop("checked")==false){
							$(".sum_total span").html(0);
						}else{
							sum += parseInt($(item).parent().parent().find(".money").html().split("￥")[1]);
							$(".sum_total span").html(sum);
						}
					})
				})
				//点击全部清空，内容全删除
				$(".all_empty").click(function(){
					$(".tbody_ul table").html("");
					localStorage.setItem(uname+"goShopping","");
					$(".car_not_pro").css("display","block");
					$(".content_box").css("display","none");
					$(".total").css("display","none");
					//头部的购物车显示要改变
					$(".cat span").css("display","none");
				})
				//选择生日牌
				$(".select_card").hover(function(){
					$(this).parent().find("ul").css("display","block");
					$(this).parent().find("ul li").hover(function(){
						$(this).css("color","#684029").siblings().css("color","#D8C3AD");
					})
					$(this).parent().find("ul li").click(function(){
						var str = $(this).html();
						$(this).parent().parent().find("span").html(str);
					})
				},function(){
					$(this).parent().find("ul").css("display","none");
				})
				//实现全选，全不选以及总价的改变
				$("#allSel").click(function(){
					$(".sel").prop("checked",$(this).prop("checked"));
					var flag = true;
					var sum = 0;
					$(".sel").each(function(index,item){
						if($(item).prop("checked")==true){
							sum += parseInt($(item).parent().parent().find(".money").html().split("￥")[1]);
							$(".sum_total span").html(sum);
						}else{
							$(".sum_total span").html(0);
						}
					})
				})
				$(".sel").click(function(){
					var flag = true;
					var sum = 0;
					$(".sel").each(function(index,item){
						if($(item).prop("checked")==false){
							flag = false;
							$(".sum_total span").html(0);
						}else{
							sum += parseInt($(item).parent().parent().find(".money").html().split("￥")[1]);
						}
						$(".sum_total span").html(sum);
					})
					if(flag){
						$("#allSel").prop("checked",true);
					}else{
						$("#allSel").prop("checked",false);
					}
				})
			}
		})
	}else{
		$(".car_not_pro").css("display","block");
	}
}
   