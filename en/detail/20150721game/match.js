$(function(){
    var allCard=12; //제품카드갯수
    var timer=15; //게임시간
    var check=0; //동일카드체크

    //크기,위치값셋팅
    var cardWidth=98;
    var cardHeight=139;
    var marginRight=28;
    var marginBottom=14;

    var location=new Array();
    var cardBack=new Array();

    var product=null;
    var hold=true;
    var holdTime=0;

    $('#mask').click(function() {initGame();cardWrap();suffle();setCard();});

    function initGame(){
        $('#mask').fadeOut(500);
        var interval_time=setInterval(function () {
            timer--
            $('.time').find('div').text(timer);
            if(timer<=0){
                clearInterval(interval_time);
                $('.time').find('div').text('0');
                endGame();
            } else if(check==6){
                clearInterval(interval_time);
                endGame();
            }
        }, 1000);
    }

    function cardWrap(){for(var i=0; i<allCard; i++) {location.push(Math.floor(i/2));}}
    function suffle(){var basic,index;for(var i=0; i<allCard; i++) {index=Math.floor(Math.random()*allCard);basic=location[index];location[index]=location[i];location[i]=basic;}}
    function setCard(){for(var i=0; i<allCard; i++) {var card=$('<div class='+'donga_card'+'>').html("<img src='images/card_back.png' width='98' height='139'>").appendTo('.gameWrap');var left=cardWidth*Math.floor(i/3)+marginRight*Math.floor(i/3);var top=cardHeight*(i%3)+marginBottom*(i%3);card.css({'left':left,'top':top});card.data('value',location[i]);card.data('isclicked',true);}product=$('.gameWrap > div.donga_card');
        product.click(function(e){if(hold==true) {if($(this).data('isclicked')==true) {$(this).data('isclicked',false);var num=$(this).data('value');$(this).children('img').attr('src','images/card_f0'+num+'.png');cardBack.push($(this));}}productCount();});}
    function productCount(){if(cardBack.length==2){hold=false;if(cardBack[0].data('value')==cardBack[1].data('value')){hold=true;cardBack.length=0;check++;} else {clearInterval(holdTime);holdTime=setInterval(productSelect,500);}}}
    function productSelect(){clearInterval(holdTime);$.each(cardBack,function(index){cardBack[index].children('img').attr('src','images/card_back.png');cardBack[index].data('isclicked',true);});hold=true;cardBack.length=0;}

    function endGame(){
        if(check==6){
            alert('성공! 300포인트가 적립되었습니다!');
        } else if(check<=5){
            alert('실패! 100포인트가 적립되었습니다!');
        }
    }
});