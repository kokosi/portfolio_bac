// JavaScript Document

	$(document).ready(function(e){
	
		var wd = $(".list li").width();
		var max = wd * $(".list li").size();
		$(".list").width(max);
		$(".list li:last").prependTo(".list")
		$(".list").css("margin-left",-wd)


		$(".right").click(function(){
			$(".list:not(:animated)").animate({
				marginLeft : parseInt($(".list").css("margin-left"))-wd+"px"
			},"swing",function(){
				$(".list li:first").appendTo(".list");
				$(".list").css("margin-left" ,-wd)
			});
			return false;
		});

		$(".left").click(function(){
			$(".list:not(:animated)").animate({
				marginLeft : parseInt($(".list").css("margin-left"))+wd+"px"
			},"swing",function(){
				$(".list li:last").prependTo(".list");
				$(".list").css("margin-left" , -wd)
			})
			return false;
		});
	});
	
	
	
	