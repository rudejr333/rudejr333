$(document).ready(function(){
		/* 상단 ▤클릭: 바탕이 검정이되면서 내비게이션이 나옴 */
		$("header>ul:first-of-type>li:first-child").click(function(){
			$("body>nav").animate({left:"0"},1000);
			$("#full_black").css("display","block");
			$("body").css("overflow","hidden");
		});
		/* 검정바탕 클릭: 검정바탕 없어지며 내비게이션 들어감 */
		$("#full_black,nav li:first-child").click(function(){
			$("body>nav").animate({left:"-170px"},1000);
			$("#full_black").css("display","none");
			$("body").css("overflow","auto");
	});
});