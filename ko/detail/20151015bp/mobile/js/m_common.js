// 초기 랜딩화면에서  영상 랜덤 노출
var curCheif=Math.floor(Math.random()*3);

$( function(){
	
	$('.cheif' + (curCheif+1)).css('display', 'block'); // 미카엘셰프 영상 영역
	$('.button li a').eq(curCheif).children('.over').css('opacity','1');
	
	//카운터 이미지 데이터
	var counter1 = '<img src="images/9.png" alt="">';
	$('.vote .cheif1 .counter').html(counter1);
	var counter2 = '<img src="images/9.png" alt=""><img src="images/9.png" alt=""><img src="images/9.png" alt="">';
	$('.vote .cheif2 .counter').html(counter2);
	var counter3 = '<img src="images/9.png" alt=""><img src="images/9.png" alt=""><img src="images/9.png" alt=""><img src="images/9.png" alt=""><img src="images/9.png" alt=""><img src="images/9.png" alt="">';
	$('.vote .cheif3 .counter').html(counter3);
	
	$('.votecnt_bar1').html('000표');
	$('.votecnt_bar2').html('111표');
	$('.votecnt_bar3').html('999,999표');
	
	//셰프 영상 선택 버튼
	$('.button li a').on('click', function(){
		
		var idx = $(this).parent().index();
		
		$('.button li a').eq(idx).children('.over').css('opacity','1');
		$('.button li a').not($('.button li a').eq(idx)).children('.over').css('opacity','0');
		
		$('.cheif').eq(idx).css('display', 'block');
		$('.cheif').not($('.cheif').eq(idx)).css('display', 'none');
		
		$('.cheif1 .youtube_area iframe').attr('src', $('.cheif1 .youtube_area iframe').attr('src'));
		$('.cheif2 .youtube_area iframe').attr('src', $('.cheif2 .youtube_area iframe').attr('src'));
		$('.cheif3 .youtube_area iframe').attr('src', $('.cheif3 .youtube_area iframe').attr('src'));
		
		return false;

	});
	
	//다운로드 클릭
	$('.chef_down_01, .chef_down_02, .chef_down_03').click(function(){
		
		var idx = $(this).parent().index();
		alert(idx + '번째 쉐프 다운로드 클릭');
		
		return false;
		
	});
	
	//셰프 영상 선택후 투표하기 버튼 - 개인 정보 입력 팝업 열기
	$('.chef_vote_01, .chef_vote_02, .chef_vote_03').on('click',function(){
		
		var idx = $(this).parent().index();
		$('.cheif').eq(idx).find('.youtube_area iframe').attr('src', $('.cheif').eq(idx).find('.youtube_area iframe').attr('src'));
		
		$('.agree_wrap input[name=name]').val('');
		$('.agree_wrap input[name=phone1]').val('');
		$('.agree_wrap input[name=phone2]').val('');
		$('.agree_wrap input[name=phone3]').val('');
		$('.agree_wrap .checkbox').removeClass('on'); // true / false
		
		$('.pop_layer').show();
		$('.agree_content').show();
		$('html,body').animate({scrollTop:($('.agree_content').offset().top-100)},'slow');
		return false;
		
	});
	
	//개인 정보 입력 팝업 닫기
	$('.agree_close_btn').on('click',function(){
		$('.agree_content').hide();
		$('.pop_layer').hide();
		return false;
	});
	
	//개인정보동의 체크박스 - background-position값 변경
	var bChecked = false;
	$('.checkbox').click(function(){
		
		bChecked = !bChecked;
		
		if (bChecked) {
			$(this).addClass('on');//체크박스 on
		} else {
			$(this).removeClass('on');//체크박스 off
		}
		return false;
		
	});
	
	//개인정보입력후 응모하기 버튼 - sns공유 팝업 열기
	$('.confirm_btn').on('click',function(){
		
		//DB Save
		var $name = $('.agree_wrap input[name=winname]').val();
		var $phone1 = $('.agree_wrap input[name=winphone1]').val();
		var $phone2 = $('.agree_wrap input[name=winphone2]').val();
		var $phone3 = $('.agree_wrap input[name=winphone3]').val();
		var $agree = $('.agree_wrap .checkbox').hasClass('on'); // true / false
		
		
		$('.agree_content').hide();
		$('.pop_layer').show(); 
		$('.sns_content').show();
		
		$('html,body').animate({scrollTop:($('.sns_content').offset().top-100)},'slow');
		return false;
	});
	
	//sns 공유팝업 닫기 버튼
	$('.sns_close_btn').on('click',function(){
		$('.sns_content').hide();
		$('.pop_layer').hide();
		return false;
	});
	
	//sns 공유버튼 클릭 - 쿠폰번호 입력 팝업 열기
	$('.sns_facebook_btn, .sns_twitter_btn').on('click',function(){
		var idx = $(this).index();
		$('.pop_layer').show();
		$('.pop_content').show();
		$('.pop_wrap').hide();
		
		
		 if($(".cheif1").css("display") == "block"){
			$('.pop_wrap1').show(); //미카엘셰프 영상보기 버튼 클릭시 뜨는 팝업
		}
		if($(".cheif2").css("display") == "block"){
			$('.pop_wrap2').show(); //정창욱셰프 영상보기 버튼 클릭시 뜨는 팝업
		}
		if($(".cheif3").css("display") == "block"){
			$('.pop_wrap3').show(); //최현석셰프 영상보기 버튼 클릭시 뜨는 팝업
		}
		
		$('html,body').animate({scrollTop:($('.pop_content').offset().top-100)},'slow');
		return false;
	});
	
	//쿠폰번호 입력 팝업닫기버튼
	$('.pop_close_btn1, .pop_close_btn2, .pop_close_btn3').on('click',function(){
		$('.pop_content').hide();
		$('.sns_content').hide();
		$('.pop_layer').hide();
		
		return false;
	});
	
	/*
	//쿠폰번호 입력버튼
	$('.confirm_btn1, .confirm_btn2, .confirm_btn3').on('click',function(){
		$('.pop_content').hide();
		$('.sns_content').hide();
		$('.pop_layer').hide();
		
		return false;
	});
	*/
	
	
	
	

	

});