/*** 전체 스크립트 ***/
	$(document).ready(function(){
		
		/* 첫번째 큰 이미지: 왼쪽화살표 클릭시 이미지교체되면서 작은흰색동그라미 바뀜 */
		$("#arr_left").click(function(){
			var zz= ($(".cir_white").index())-1;
			$("#btn_circle div").eq(zz).addClass("cir_white").siblings().removeClass();
			switch(zz){
				case -1: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");break;
				case 0:  $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");break;
				case 1:  $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2:  $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')");
			}
		});
		
		/* 첫번째 큰 이미지: 오른쪽화살표 클릭시 이미지교체되면서 작은동그라미 흰색이동 */
		$("#arr_right").click(function(){
			var zz= ($(".cir_white").index())+1;
			$("#btn_circle div").eq(zz).addClass("cir_white").siblings().removeClass();
			switch(zz){
				case 1: $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2: $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')");break;
				case 3: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");break;
				case 4: $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");
						  $("#btn_circle div").eq(0).addClass("cir_white").siblings().removeClass();
			}
		});
		 		
		/* 작은동그라미 클릭시 이미지 교체 */		
		$("#btn_circle div").click(function(){
			var cir_w= $("#btn_circle div").index(this);
			$("#btn_circle div").eq(cir_w).addClass("cir_white").siblings().removeClass();
			switch(cir_w) {
				case 0: $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");break;
				case 1: $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2: $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')");break;
				case 3: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");
			}
		});	
		
		
		/* 첫번째 섹션: 큰이미지 자동이동 */		
		setInterval(function(){		
			var dd= ($(".cir_white").index())+1;
			$("#btn_circle div").eq(dd).addClass("cir_white").siblings().removeClass();
			switch(dd) {
				case 0: $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");break;
				case 1: $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2: $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')");break;
				case 3: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");break;
				case 4: $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");
						$("#btn_circle div").eq(0).addClass("cir_white").siblings().removeClass();
			}
		},1500)	
		
		
		
		/* 두번째 섹션: 빵위의 원형 이동 */
		$("main>section:nth-of-type(2) li").click(function(){
			var circle=$("main>section:nth-of-type(2) li").index(this);
			switch(circle){
				case 0: $("main>section:nth-of-type(2)>div:first-of-type").animate({margin:"12pt 0 0 5pt"}); 
						  $("main>section:nth-of-type(2)>div:first-of-type").html(						  
								"<em>순 애플 통밀 브래드</em>상큼한 예산 사과가<br>들어있어 더욱 맛있게<br>즐길 수 있는 부드럽고<br>달백한 통밀빵"										  
							); break;
				case 1: $("main>section:nth-of-type(2)>div:first-of-type").animate({margin:"12pt 0 0 130pt"});
				          $("main>section:nth-of-type(2)>div:first-of-type").html(
								"<em>생크림 통밀 브래드</em>상큼한 생크림이<br>들어있어 더욱 맛있게<br>즐길 수 있는 부드럽고<br>달백한 생크림빵"
							); break;
				case 2: $("main>section:nth-of-type(2)>div:first-of-type").animate({margin:"150pt 0 0 5pt"});
				          $("main>section:nth-of-type(2)>div:first-of-type").html(
								"<em>치즈 통밀 브래드</em>상큼한 치즈가<br>들어있어 더욱 맛있게<br>즐길 수 있는 부드럽고<br>달백한 치즈빵"
							); break;
				case 3: $("main>section:nth-of-type(2)>div:first-of-type").animate({margin:"150pt 0 0 130pt"});
						  $("main>section:nth-of-type(2)>div:first-of-type").html(
								"<em>영양 통밀 식빵</em>상큼한 건포토가 듬뿍<br>들어있어 더욱 맛있게<br>즐길 수 있는 부드럽고<br>달백한 양양식빵"
							);
			}
		});	
		/* BAKING CLASS 와 LOCATION */
		$("#baking>div").click(function(){
			$(location).attr({"href":"baking.html", "rel":"external"});
		});
		$("main>section:eq(3)>div").click(function(){
			$(location).attr("href","brand_story_location.html");
		});
	});