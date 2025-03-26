$(function () {
    let img=$('.tu');
    function move(){
            img.animate(
                {left:'-=100'},"slow",function(){
                    if(img.position().left < -1200){
                        img.css({left:"0"});
                    }
                });
    }
    let t=setInterval(move,1000);
    img.mouseenter(function(event) {
        clearInterval(t);
    });
    img.mouseleave(function(event) {
        t=setInterval(move,1000);

    });
});