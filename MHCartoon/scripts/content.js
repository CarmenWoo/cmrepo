

	var t = n = 0, count;
	$(document).ready(function(){	
		count=$("#pic_list a").length;
		$("#pic_list a:not(:first-child)").hide();
		$("#pic_info").html($("#pic_list a:first-child").find("img").attr('alt'));
		$("#pic_info").click(function(){window.open($("#pic_list a:first-child").attr('href'), "_blank")});
		$("#pic li").click(function() {
			var i = $(this).text() - 1;
			n = i;
			if (i >= count) return;
			$("#pic_info").html($("#pic_list a").eq(i).find("img").attr('alt'));
			$("#pic_info").unbind().click(function(){window.open($("#pic_list a").eq(i).attr('href'), "_blank")})
			$("#pic_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
			document.getElementById("banner").style.background="";
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
		});
		t = setInterval("showAuto()", 4000);
		$("#pic").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});
	})
	
	function showAuto()
	{
		n = n >=(count - 1) ? 0 : ++n;
		$("#pic li").eq(n).trigger('click');
	}

