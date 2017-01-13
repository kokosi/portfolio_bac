var youtube_player = [];
var vodList = ['h4voXGm6cYw','sc4NSfZ3qZU','uKbbP3QTxx8']; //영상URL
var bLoaded = false; //3개 동영상 모두 로드시 true
var loadCnt = 0; //로딩카운트

var bSafari = false;
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
   bSafari = true;          
}	

$(function(){
	
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);	

});

function onYouTubeIframeAPIReady() {
	
	for (var i=0;i<vodList.length;i++){
		
		youtube_player[i] = new YT.Player('youTubePlayer' + (i+1), {
			width: '535',
		    height: '301',
		    videoId: vodList[i],
		    playerVars: { 'controls': 1,'autohide':1, 'rel':0, 'wmode':'transparent' },
		    events: {
			      'onReady': onPlayerReady,
			      'onStateChange': onPlayerStateChange
			    }
		  	});
	}	
	
	if (bSafari) youtubeLoadComplete();
	
}
function onPlayerReady(event) {
	loadCnt++;
	if (loadCnt == 3) youtubeLoadComplete();
	
}
function onPlayerStateChange(event) {
	//if (event.data == YT.PlayerState.ENDED) {}
}
//YouTube Script End

