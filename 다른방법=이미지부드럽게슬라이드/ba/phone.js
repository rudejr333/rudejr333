/*** 스마트폰용 스크립트 ***/
	$(document).on("pagecreate",function(){
		$(this).unbind();
		$("main>section:first-of-type").on("swiperight",function(){
			var zz= ( $(".cir_white").index() )-1;
			//alert ("현재의 태그 상태는 \n"+$("main>section:first-of-type").html() );
			$("#btn_circle div").eq(zz).addClass("cir_white").siblings().removeClass();				
			switch(zz){
				case -1: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");break; 
				case 0:  $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");break; 
				case 1:  $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2:  $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')"); 
			}
			//alert ("현재의 태그 상태는 \n"+$("main>section:first-of-type").html() );
		}); 
		
		$("main>section:first-of-type").on("swipeleft",function(){
			var dd= ($(".cir_white").index())+1;
			$("#btn_circle div").eq(dd).addClass("cir_white").siblings().removeClass();
			switch(dd){
				case 1: $("main>section:first-of-type").css("background","url('images/con_2_bg.jpg')");break;
				case 2: $("main>section:first-of-type").css("background","url('images/con_3_bg.jpg')");break;
				case 3: $("main>section:first-of-type").css("background","url('images/con_4_bg.jpg')");break;
				case 4: $("main>section:first-of-type").css("background","url('images/con_1_bg.jpg')");
						  $("#btn_circle div").eq(0).addClass("cir_white").siblings().removeClass();
			}
		}); 
	});