// JavaScript Document

	$(document).ready(function(e) {
   		var $quick_menu = $('#quick_menu'); // 퀵매뉴의 id명
		var quick_top = 350; // 위에서부터 떨어져야 되는 거리
		var quick_left = 420; // 중앙에서 떨어져야 되는 거리
		var quick_speed = 1000; // 이동속도
	
	 	$quick_menu.css('display', ''); // 퀵메뉴를 보이게 설정 
	 	$quick_menu.css('top', quick_top + "px"); // 퀵메뉴의 상단위치를 앞에서지정한 quick_top 값으로 지정 
	 // 퀵메뉴 가로위치를 body 중앙에서 부터 앞에서지정된 quick_left 값만큼 지정 
     	$quick_menu.css('left', (document.body.clientWidth / 2) + quick_left + "px" );     
 
     	$(window).resize(function(){// 윈도우사이즈 (가로사이즈) 조절되면 
         	$quick_menu.css('left', (document.body.clientWidth / 2) + quick_left + "px" );
		 // 퀵메뉴의 가로위치를 body 중앙에서 부터 앞에서지정된 quick_left 값만큼 계속지정 
     	});
 
	   	$(window).scroll(function(){
  	     	$quick_menu.stop();
		  // 윈도우가 스크롤 되면 상단위치를 스크롤된높이에 다시 quick_top 값을 더해서 에니메이트 
		  // ( 중요 : 퀵메뉴의 상단위치를 앞에서지정한 quick_top 값으로 계속지정하기 위해 )
    	  	$quick_menu.animate( { "top": $(document).scrollTop() + quick_top + "px" }, quick_speed, "easeOutCubic" );
     	});	
		});