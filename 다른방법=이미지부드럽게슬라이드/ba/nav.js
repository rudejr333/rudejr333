$(document).ready(function(){
		/* ��� ��Ŭ��: ������ �����̵Ǹ鼭 ������̼��� ���� */
		$("header>ul:first-of-type>li:first-child").click(function(){
			$("body>nav").animate({left:"0"},1000);
			$("#full_black").css("display","block");
			$("body").css("overflow","hidden");
		});
		/* �������� Ŭ��: �������� �������� ������̼� �� */
		$("#full_black,nav li:first-child").click(function(){
			$("body>nav").animate({left:"-170px"},1000);
			$("#full_black").css("display","none");
			$("body").css("overflow","auto");
	});
});