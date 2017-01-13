
//선택쉐프 글로벌변수 (0 ~ 2) 0:최현석/1:정창욱/2:미카엘
var curCheif = 0; 
curCheif = Math.floor(Math.random() * 3);
//
/******************************************************************/
//YouTube Script Start
var youtube_player = [];
var vodList = ['Lh8RWP6uAHA','UyaOBSYMCpc','6QP4ScSbefc']; //영상URL

//vs 표시 위치
var l_vs1 = 79;
var l_vs2 = 969;

function onYouTubeIframeAPIReady() {
		
	youtube_player[curCheif] = new YT.Player('youTubePlayer' + (curCheif+1), {
		width: '535',
	    height: '301',
	    videoId: vodList[curCheif],
	    playerVars: { 'controls': 1,'autohide':1, 'rel':0, 'wmode':'transparent', allowScriptAccess: "always" },
	    events: {
		      'onReady': onPlayerReady,
		      'onStateChange': onPlayerStateChange
		    }
	  	});
	
}
function onPlayerReady(event) {
	event.target.playVideo();
}
function onPlayerStateChange(event) {
	//if (event.data == YT.PlayerState.ENDED) {}
}
//YouTube Script End
/******************************************************************/

$(function(){
	
	//쉐프 초기 셋팅
	setDefCheif();
	
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);	
	
	
	//세로바 클릭
	$('.cheif .btn_bar a').click(function(){
		
		var idx = $(this).parent().parent().index();
		curCheif = idx;
		setCheif();
		
		return false;
		
	});
	
	//투표하기 클릭
	$('.cheif a.btn_vote').click(function(){
		pauseYoutube();
		$('.pop_content').css({'display':'block','top':($('.vote').offset().top)});
		$('.pop_layer').show();  //팝업레이어
		$('.pop_wrap1').show();   //개인정보입력
		$('html,body').animate({scrollTop:($('.pop_content').offset().top-100)},'slow');
		return false;
		
	});
	
	//다운로드 클릭
	$('.cheif a.btn_down').click(function(){
		
		alert(curCheif + '번째 쉐프 다운로드 클릭');
		
		return false;
		
	});
	
	//SNS별 공유 버튼(페북,트위터,카카오 공유 버튼)
	$('.sns_vote li a').click(function(){
		
		$('.pop_wrap2').hide(); //SNS닫기
		$('.pop_wrap3').removeClass('choi');
		$('.pop_wrap3').removeClass('chung');
		$('.pop_wrap3').removeClass('mikhal');
		var cname = 'choi';
		if(curCheif == 1) cname='chung';
		if(curCheif == 2) cname='mikhal';
		
		$('.pop_wrap3').addClass(cname);
		$('.pop_wrap3').show(); //결과팝업열기
		return false;
	});
	
	
	//개인정보입력 팝업 확인버튼 (응모하기)
	$('.pop_wrap1 .confirm_btn').click(function(){
		
		//DB Save
		var $name = $('.pop_wrap1 input[name=name]').val();
		var $phone1 = $('.pop_wrap1 input[name=phone1]').val();
		var $phone2 = $('.pop_wrap1 input[name=phone2]').val();
		var $phone3 = $('.pop_wrap1 input[name=phone3]').val();
		var $agree = $('.pop_wrap1 .checkbox').hasClass('on'); // true / false
		/*
		 * 투표참여 개인정보 등록
		 */
		$('.pop_wrap1').hide(); //개인정보입력 팝업 닫기
		
		$('.pop_wrap2').show(); //SNS 공유 팝업 열기
		
		return false;
	});
		
	
	var bChecked = false; //개인정보이용동의 체크여부	
	
	//개인정보이용동의 체크박스 - background-position값 변경
	$('.checkbox').click(function(){
		bChecked = !bChecked; 
		if (bChecked) $(this).addClass('on'); //개인정보이용동의 체크박스 on
		else $(this).removeClass('on'); //개인정보이용동의 체크박스 off
		return false;
	});
	
	//팝업닫기버튼(공통)
	$('.pop_close').click(function(){
		$('.pop_content').hide();
		$('.pop_wrap').hide();
		$('.pop_layer').hide();
		if($(this).hasClass('pop_close_btn3')){
			$('html,body').animate({'scrollTop':$('.cheif'+(curCheif+1)+'_list').offset().top});	
			
		}
		return false;
	});
	
});

function setDefCheif(){
	
	l_vs1 = (curCheif == 0)? 869:79;
	l_vs2 = (curCheif == 2)? 179:969;
	
	$('.cheif').eq(curCheif).find('.btn_bar').hide();
	$('.cheif').eq(curCheif).css({'width':890});
	$('.cheif').eq(curCheif).siblings().css({'width':100});
	$('.cheif').eq(curCheif).siblings().find('.btn_bar').show();
	$('.vs.s1').css({'left':l_vs1});
	$('.vs.s2').css({'left':l_vs2});	
	
}
function setCheif() {
	
	l_vs1 = (curCheif == 0)? 869:79;
	l_vs2 = (curCheif == 2)? 179:969;
	
	$('.cheif').eq(curCheif).find('.btn_bar').fadeOut();
	$('.cheif').eq(curCheif).siblings().animate({'width':100}, 500, 'swing');
	$('.cheif').eq(curCheif).animate({'width':890}, 500, 'swing');
	$('.vs.s1').animate({'left':l_vs1}, 500, 'swing');
	$('.vs.s2').animate({'left':l_vs2}, 500, 'swing', function(){
		$('.cheif').eq(curCheif).siblings().find('.btn_bar').fadeIn();
		
		pauseYoutube();
		try{
			youtube_player[curCheif].seekTo(0, true);
			youtube_player[curCheif].playVideo();
		} catch(e){
			onYouTubeIframeAPIReady();
		}		
		
	});
	
	
}

function pauseYoutube(){
	for (var i=0;i<3;i++) {
		try{youtube_player[i].pauseVideo();} catch(e){}		
	}
}

function moveScroll(idx){
	
	var pos = $('.plist').eq(idx).offset().top;
	$("html, body").animate( {scrollTop: pos}, 'slow');
	return false;
}