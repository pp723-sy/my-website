$(function () {
    let con1 = $('.con1-1'),
        box = $('.box'),
        guanbi = $('.guanbi');
    let divson=$('.ul'),
        hezi=$('.hezi'),
        divson1=$('.ull');
    let div=$('.ul > li'),
        div1=$('.ull>li');
    let dudu=hezi.offset().left+hezi.width()-855;
    divson1.css({left:dudu});
    let src=$(div[3]).find('img').attr('src');
    hezi.find('img').attr('src',src);

    /* 打开关闭 */
    con1.click(function () {
        box.css({opacity:"1",zIndex:"99"});
    });
    guanbi.click(function () {
        box.css({opacity:"0",zIndex:"-1"});
    });

    /* imgBOX */
    div.click(function(){
        let that=$(this);
        let left=hezi.offset().left-$(this).offset().left;
        let he=left+divson.position().left;
        divson.animate({left:he},function(){

            let src=that.find('img').attr('src');

            hezi.find('img').attr('src',src);
        });
        let he1=left+divson1.position().left;
        divson1.animate({left:he1,zIndex:'22'});
    });
    div1.click(function(){

        let that=$(this);
        let left=(hezi.offset().left+hezi.width())-($(this).offset().left+$(this).width());
        console.log(hezi.offset().left+hezi.width(),$(this).offset().left+$(this).width())
        let he=left+divson1.position().left;
        divson1.animate({left:he,zIndex:'20'},function(){

            let src=that.find('img').attr('src');

            hezi.find('img').attr('src',src);
        });
        let he1=left+divson.position().left;
        divson.animate({left:he1});
    });
});
