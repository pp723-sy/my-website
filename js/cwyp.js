
$(function () {
    let bigBox = $('.bigbox');
    let xxq=$('.xxq1');
    let box = $('.box > img');
    let li = $('li');
    let ul = $('ul');
    let souSuo = $('.sousuo');

    let btn1 = $('.btn1');
    let btn2 = $('.btn2');
    let index = 0;
    let ins = 0;
    let imgbox = $('.imgbox');
    let guanb=$('.guanbi');

    xxq.hover(function () {
        souSuo.css({display:"block"});
    },function () {
        souSuo.css({display:"none"});
    });

    xxq.click(function(){
        bigBox.css({display:'block'});
    });
    guanb.click(function(){
        bigBox.css({display:'none'});
    });
    function move(type){
        type = type || 'btn2';
        if(type == 'btn1'){
            index--;
            if(index < 0){
                index = li.length-1;
            }
        }else if(type == 'btn2'){
            index++;
            if(index > li.length-1){
                index = 0;
            }
        }

        let src = li.eq(index).children('img').attr('src');
        li.removeClass('hot').eq(index).addClass('hot')
        box.attr('src',src)
    }

    btn2.click(function(){
        move('btn2');
    });
    btn1.click(function(){
        move('btn1');
    });


    li.click(function(){
        li.not($(this)).removeClass('hot');
        $(this).addClass('hot');
        index = li.index($(this))-1;
        move();
    });
	// 添加轮播功能
	    function startCarousel() {
	        setInterval(function () {
	            move('btn2');
	        }, 3000); // 设置轮播间隔时间，单位为毫秒
	    }
	
	    // 初始化轮播
	    startCarousel();
})